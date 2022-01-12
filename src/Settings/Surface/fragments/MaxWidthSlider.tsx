import { Slider } from "../../../components"
import { useSurfaceSettings } from "../../../Providers"

export const MaxWidthSlider = () => {
  const [settings, setSettings] = useSurfaceSettings()
  const { maxWidth } = settings

  const handleChange = (maxWidth: number) =>
    setSettings({ ...settings, maxWidth })

  return (
    <Slider
      label="Max width"
      value={maxWidth}
      min={700}
      max={1600}
      step={10}
      onChange={handleChange}
      getValueText={value => `max width: ${value}px`}
    />
  )
}
