import { useEffect, useMemo, useState } from "react"

import { useTheme } from "@startpage/theming"

import { Slider } from "../../../components/Slider"
import { useSurfaceSettings } from "../../../Providers"
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
  const [surfaceSettings, setSurfaceSettings] = useSurfaceSettings()
  const [amount, setAmount] = useState(surfaceSettings.shadow.amount)
  const [blur, setBlur] = useState(surfaceSettings.shadow.blur)
  const [offset, setOffset] = useState(surfaceSettings.shadow.offset)

  const shadow = useMemo(() => {
    const shadowParams = { amount, blur, offset }
    const startColor = color.primary.bg
    const endColor = color.secondary.bg
    return createShadowGradiant(startColor, endColor, shadowParams)
  }, [amount, blur, color, offset])

  useEffect(() => {
    if (surfaceSettings.shadow.shadow !== shadow) {
      setSurfaceSettings({
        ...surfaceSettings,
        shadow: {
          amount,
          blur,
          offset,
          shadow,
        },
      })
    }
  }, [amount, blur, offset, setSurfaceSettings, shadow, surfaceSettings])

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
