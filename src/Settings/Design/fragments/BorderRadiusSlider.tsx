import { Slider } from "../../../components/Slider"
import { useSettings } from "../../../Providers"
import { CenterLayout } from "./CenterLayout"

export const BorderRadiusSlider = () => {
  const [settings, setSettings] = useSettings()
  const { surfaceBorderRadius } = settings

  const handleChange = (surfaceBorderRadius: number) =>
    setSettings({ ...settings, surfaceBorderRadius })

  return (
    <CenterLayout>
      <Slider
        label="Border radius"
        value={surfaceBorderRadius}
        min={0}
        max={64}
        step={1}
        onChange={handleChange}
        getValueText={value => `${value}px border radius`}
      />
    </CenterLayout>
  )
}
