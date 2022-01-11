import { Slider } from "../../../components/Slider"
import { useSurfaceSettings } from "../../../Providers"
import { CenterLayout } from "./CenterLayout"

const BorderRadiusSlider = () => {
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

const MaxWidthSlider = () => {
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

export const SurfaceMiscStyles = () => (
  <CenterLayout>
    <MaxWidthSlider />
    <BorderRadiusSlider />
  </CenterLayout>
)
