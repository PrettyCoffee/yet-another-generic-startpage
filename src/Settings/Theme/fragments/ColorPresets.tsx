import { getTheme } from "@startpage/preset"

import { Select } from "../../../components"
import { ColorSetStateProps, extractColorSetFromTheme } from "../utils/ColorSet"

const themePresetOptions = [
  { label: "Atom", value: "atom" },
  { label: "Dracula", value: "dracula" },
  { label: "Nord", value: "nord" },
  { label: "Material", value: "material" },
]

export const ColorPresets = ({ colors, updateColors }: ColorSetStateProps) => {
  const handleChange = (value: string) => {
    const theme = getTheme(value)
    const newColorSet = extractColorSetFromTheme(theme)
    updateColors(newColorSet)
  }

  return (
    <Select
      label="Color presets"
      options={themePresetOptions}
      value={colors.name}
      placeholder="No selected"
      onChange={handleChange}
    />
  )
}
