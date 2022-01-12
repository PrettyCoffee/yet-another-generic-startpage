import { useState } from "react"

import styled from "@emotion/styled/macro"
import { createColorScheme, getInvertedColorScheme } from "@startpage/preset"
import { useTheme } from "@startpage/theming"

import { Section } from "../../components"
import { ColorFields, ColorPresets, InvertSwitch } from "./fragments"
import { ColorSet, extractColorSetFromTheme } from "./utils/ColorSet"

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

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
      <Layout>
        <ColorPresets {...sharedProps} />
        <InvertSwitch {...sharedProps} />
      </Layout>
    </Section>
  )
}
