import { useEffect, useMemo, useState } from "react"

import { useTheme } from "@startpage/theming"

import { Slider } from "../../../components/Slider"
import { useSurfaceSettings } from "../../../Providers"
import { CenterLayout } from "../../fragments/CenterLayout"
import {
  createShadowGradiant,
  ShadowParameters,
} from "../utils/createShadowGradiant"

export type ShadowOptions = ShadowParameters & {
  shadow: string
  amount: number
  offset: number
  blur: number
}

export const ShadowStyle = () => {
  const { theme } = useTheme()
  const { color } = theme

  const [surfaceSettings, setSurfaceSettings] = useSurfaceSettings()
  const [amount, setAmount] = useState(surfaceSettings.shadow.amount)
  const [blur, setBlur] = useState(surfaceSettings.shadow.blur)
  const [offset, setOffset] = useState(surfaceSettings.shadow.offset)

  const shadowParams = useMemo(
    () => ({ amount, blur, offset }),
    [amount, blur, offset]
  )

  const shadow = useMemo(() => {
    const startColor = color.primary.bg
    const endColor = color.secondary.bg
    return createShadowGradiant(startColor, endColor, shadowParams)
  }, [color.primary.bg, color.secondary.bg, shadowParams])

  useEffect(() => {
    if (surfaceSettings.shadow.shadow !== shadow)
      setSurfaceSettings({
        ...surfaceSettings,
        shadow: {
          ...shadowParams,
          shadow,
        },
      })
  }, [surfaceSettings, setSurfaceSettings, shadow, shadowParams])

  return (
    <CenterLayout>
      <Slider
        label="Shadow count"
        value={amount}
        min={1}
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
