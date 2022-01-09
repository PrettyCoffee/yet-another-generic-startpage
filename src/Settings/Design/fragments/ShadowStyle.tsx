import { useEffect, useState } from "react"

import { useTheme } from "@startpage/theming"

import { Slider } from "../../../components/Slider"
import { useSettings } from "../../../Providers"
import {
  createShadowGradiant,
  ShadowParameters,
} from "../utils/createShadowGradiant"
import { CenterLayout } from "./CenterLayout"

export type ShadowOptions = ShadowParameters & {
  shadow: string
  amount: number
  offset: number
  blur: number
}

export const ShadowStyle = () => {
  const {
    theme: { color },
  } = useTheme()
  const [settings, setSettings] = useSettings()
  const { surfaceShadow } = settings
  const [amount, setAmount] = useState(surfaceShadow?.amount || 5)
  const [blur, setBlur] = useState(surfaceShadow?.blur || 0)
  const [offset, setOffset] = useState(surfaceShadow?.offset || 12)

  useEffect(() => {
    const shadowParameters = {
      amount,
      blur,
      offset,
    }
    const startColor = color.primary.bg
    const endColor = color.secondary.bg
    const shadow = createShadowGradiant(startColor, endColor, shadowParameters)

    if (settings.surfaceShadow?.shadow !== shadow) {
      setSettings({
        ...settings,
        surfaceShadow: {
          ...shadowParameters,
          shadow,
        },
      })
    }
  }, [amount, blur, offset, settings, color, setSettings])

  return (
    <CenterLayout>
      <Slider
        label="Shadow count"
        value={amount}
        min={0}
        max={32}
        step={1}
        onChange={setAmount}
        getValueText={value => `${value} shadow(s)`}
      />
      <Slider
        label="Shadow offset"
        value={offset}
        min={0}
        max={32}
        step={1}
        onChange={setOffset}
        getValueText={value => `${value}px offset`}
      />
      <Slider
        label="Shadow blur"
        value={blur}
        min={0}
        max={32}
        step={1}
        onChange={setBlur}
        getValueText={value => `${value}px blur`}
      />
    </CenterLayout>
  )
}
