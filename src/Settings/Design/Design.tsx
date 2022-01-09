import { useState } from "react"

import { createColorScheme, getInvertedColorScheme } from "@startpage/preset"
import { useTheme } from "@startpage/theming"

import { Section } from "../../components"
import {
  ColorFields,
  ColorPresets,
  InvertSwitch,
  ShadowStyle,
} from "./fragments"
import { SurfaceMiscStyles } from "./fragments/SurfaceMiscStyles"
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
      <br />
      <ColorPresets {...sharedProps} />
      <br />
      <InvertSwitch {...sharedProps} />
      <h3>Colors</h3>
      <ColorFields {...sharedProps} />
      <br />
      <h3>Window</h3>
      <SurfaceMiscStyles />
      <ShadowStyle />
    </Section>
  )
}
