import { Slider } from "../../../components"
import { useSurfaceSettings } from "../../../Providers"

export const BorderRadiusSlider = () => {
  const [settings, setSettings] = useSurfaceSettings()
  const { borderRadius } = settings

  const handleChange = (borderRadius: number) =>
    setSettings({ ...settings, borderRadius })

  return (
    <Slider
      label="Border radius"
      value={borderRadius}
      min={0}
      max={64}
      step={1}
      onChange={handleChange}
      getValueText={value => `${value}px border radius`}
    />
  )
}
