import { BaseColors } from "@startpage/preset"
import { Theme } from "@startpage/theming"

export type ColorSet = BaseColors & {
  name: string
  inverted: boolean
}

export type ColorSetStateProps = {
  colors: ColorSet
  updateColors: (colors: ColorSet) => void
}

export const extractColorSetFromTheme = ({
  color,
  inverted,
}: Theme): ColorSet => ({
  inverted,
  name: color.name,
  bg: inverted ? color.fg.base : color.bg.base, // reset invert
  fg: inverted ? color.bg.base : color.fg.base, // reset invert
  primary: color.primary.base,
  secondary: color.secondary.base,
})
