import { Slider } from "../../../components/Slider"
import { useSettings } from "../../../Providers"
import { CenterLayout } from "./CenterLayout"

const BorderRadiusSlider = () => {
  const [settings, setSettings] = useSettings()
  const { surfaceBorderRadius } = settings

  const handleChange = (surfaceBorderRadius: number) =>
    setSettings({ ...settings, surfaceBorderRadius })

  return (
    <Slider
      label="Border radius"
      value={surfaceBorderRadius}
      min={0}
      max={64}
      step={1}
      onChange={handleChange}
      getValueText={value => `${value}px border radius`}
    />
  )
}

const MaxWidthSlider = () => {
  const [settings, setSettings] = useSettings()
  const { surfaceMaxWidth } = settings

  const handleChange = (surfaceMaxWidth: number) =>
    setSettings({ ...settings, surfaceMaxWidth })

  return (
    <Slider
      label="Max width"
      value={surfaceMaxWidth}
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
