import { useBookmarks } from "@startpage/bookmarks"
import { useTheme } from "@startpage/theming"

import { rawCssVars } from "./rawFiles"
import { replacePlaceholders } from "./replacePlaceholders"
import { useGeneralSettings, useSurfaceSettings } from "../../../Providers"

const objectToString = (object: Record<string, unknown>) => {
  const vars: string[] = []
  Object.keys(object).forEach(key => {
    const value = object[key]
    if (value && typeof value === "object") {
      objectToString(value as Record<string, unknown>).forEach(path => {
        vars.push(`${key}-${path}`)
      })
    } else {
      vars.push(key + `: ${value};`)
    }
  })
  return vars
}

const getCssVarsFromObject = (
  object: Record<string, unknown>,
  excludedKeys: string[]
) => {
  const copy = { ...object }
  excludedKeys.forEach(key => delete copy[key])
  const paths = objectToString(copy)
  const vars = paths.map(path => "  --" + path)

  return vars.join("\n")
}

export const useMiniCssVars = () => {
  const {
    theme: { color, space },
  } = useTheme()
  const [{ maxWidth, shadow, borderRadius }] = useSurfaceSettings()
  const [{ displayImg, font, fontSize }] = useGeneralSettings()
  const { bookmarkGroups } = useBookmarks()

  const colorVars = getCssVarsFromObject({ color }, ["name", "palette"])
  const spaceVars = getCssVarsFromObject({ space }, [])

  return replacePlaceholders(rawCssVars, {
    colors: colorVars,
    spacing: spaceVars,
    maxWidth: String(maxWidth) + "px",
    borderRadius: String(borderRadius) + "px",
    shadow: shadow.shadow,
    fontSize: String(fontSize),
    font,
    displayImage: displayImg ? "block" : "none",
    groupCount: String(bookmarkGroups.length),
  })
}
