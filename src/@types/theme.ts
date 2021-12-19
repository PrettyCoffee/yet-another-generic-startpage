import "@emotion/react"
import "@startpage/theming"

import { StpgTheme } from "@startpage/preset"

declare module "@emotion/react" {
  export interface Theme extends StpgTheme {}
}
declare module "@startpage/theming" {
  export interface Theme extends StpgTheme {}
}
