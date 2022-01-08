import { useState } from "react"

import { createColorScheme, getInvertedColorScheme } from "@startpage/preset"
import { useTheme } from "@startpage/theming"

import { Section } from "../../components"
import { ColorFields } from "./fragments/ColorFields"
import { ColorPresets } from "./fragments/ColorPresets"
import { InvertSwitch } from "./fragments/InvertSwitch"
import { ColorSet, extractColorSetFromTheme } from "./utils/ColorSet"

export const Design = () => {
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
    <Section title="Design">
      <h3>Colors</h3>
      <br />
      <ColorPresets {...sharedProps} />
      <br />
      <InvertSwitch {...sharedProps} />
      <br />
      <ColorFields {...sharedProps} />
      <br />
    </Section>
  )
}
