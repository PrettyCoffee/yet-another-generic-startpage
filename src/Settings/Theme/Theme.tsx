import { useState } from "react"

import { createColorScheme, getInvertedColorScheme } from "@startpage/preset"
import { useTheme } from "@startpage/theming"

import { Section } from "../../components"
import { SpacedLayout } from "../fragments/SpacedLayout"
import { ColorFields, ColorPresets, InvertSwitch } from "./fragments"
import { ColorSet, extractColorSetFromTheme } from "./utils/ColorSet"

export const Theme = () => {
  const { theme, setTheme } = useTheme()
  const [colors, setColors] = useState(extractColorSetFromTheme(theme))

  const updateColors = (newColors: ColorSet) => {
    setColors(newColors)

    const inverted = newColors.inverted
    let color = createColorScheme(newColors.name, { ...newColors })
    if (inverted) color = getInvertedColorScheme(color)
    setTheme({ ...theme, color, inverted })
  }

  const sharedProps = {
    colors,
    updateColors,
  }

  return (
    <Section title="Theme">
      <ColorFields {...sharedProps} />
      <br />
      <br />
      <SpacedLayout>
        <ColorPresets {...sharedProps} />
        <InvertSwitch {...sharedProps} />
      </SpacedLayout>
    </Section>
  )
}
