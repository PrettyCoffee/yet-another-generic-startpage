import { useEffect, useState } from "react"

import {
  BaseColors,
  createColorScheme,
  getInvertedColorScheme,
  getTheme,
} from "@startpage/preset"
import { Theme as ThemeType, useTheme } from "@startpage/theming"

import { ColorInput, Section, Select, Switch } from "../components"

const themePresetOptions = [
  { label: "Atom", value: "atom" },
  { label: "Dracula", value: "dracula" },
  { label: "Nord", value: "nord" },
  { label: "Material", value: "material" },
]

const getBaseColors = ({ color }: ThemeType): BaseColors => ({
  bg: color.bg.base,
  fg: color.fg.base,
  primary: color.primary.base,
  secondary: color.secondary.base,
})

export const Theme = () => {
  const { theme, setTheme } = useTheme()
  const [baseColors, setBaseColors] = useState(getBaseColors(theme))
  const [currentTheme, setCurrentTheme] = useState(theme.color.name)
  const [invert, setInvert] = useState(theme.inverted)

  useEffect(() => {
    const colorScheme = createColorScheme(currentTheme, baseColors)

    setTheme({
      ...theme,
      color: colorScheme,
      inverted: invert,
    })
  }, [baseColors])

  const setColor = (key: keyof BaseColors, value: string) => {
    const cpy = { ...baseColors }
    cpy[key] = value
    setBaseColors(cpy)
    setCurrentTheme("custom")
  }

  const setBg = (value: string) => setColor("bg", value)

  const setFg = (value: string) => setColor("fg", value)

  const setPrimary = (value: string) => setColor("primary", value)

  const setSecondary = (value: string) => setColor("secondary", value)

  const selectChange = (value: string) => {
    setBaseColors(getBaseColors(getTheme(value, invert)))
    setCurrentTheme(value)
  }

  const invertColors = (invert: boolean) => {
    setInvert(invert)
    const colorScheme = getInvertedColorScheme(theme.color)
    setTheme({
      ...theme,
      color: colorScheme,
      inverted: invert,
    })
  }

  return (
    <Section title="Theme">
      <br />
      <Select
        label="Color presets"
        options={themePresetOptions}
        value={currentTheme}
        placeholder="No selected"
        onChange={selectChange}
      />
      <br />
      <Switch checked={invert} onChange={invertColors} label="Invert theme" />
      <br />
      <h3>Colors</h3>
      <ColorInput label="Background" value={baseColors.bg} onChange={setBg} />
      <ColorInput label="Foreground" value={baseColors.fg} onChange={setFg} />
      <ColorInput
        label="Primary"
        value={baseColors.primary}
        onChange={setPrimary}
      />
      <ColorInput
        label="Secondary"
        value={baseColors.secondary}
        onChange={setSecondary}
      />
      <br />
    </Section>
  )
}
