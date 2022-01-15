import { useMemo } from "react"

import { createColorScheme, getInvertedColorScheme } from "@startpage/preset"
import { useTheme } from "@startpage/theming"

import { SpacedLayout } from "../../fragments/SpacedLayout"
import { ColorSet, extractColorSetFromTheme } from "../utils/ColorSet"
import { ColorFields, ColorPresets, InvertSwitch } from "./"

export const AutoColoring = () => {
  const { theme, setTheme } = useTheme()

  const colors = useMemo(() => extractColorSetFromTheme(theme), [theme])

  const updateColors = (newColors: ColorSet) => {
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
    <>
      <ColorFields {...sharedProps} />
      <br />
      <br />
      <SpacedLayout>
        <ColorPresets {...sharedProps} />
        <InvertSwitch {...sharedProps} />
      </SpacedLayout>
    </>
  )
}
