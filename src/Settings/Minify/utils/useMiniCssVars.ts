import { useBookmarks } from "@startpage/bookmarks"
import { useTheme } from "@startpage/theming"

import { useGeneralSettings, useSurfaceSettings } from "../../../Providers"
import { getMiniYagsFile } from "./getMiniYagsFile"
import { replacePlaceholders } from "./replacePlaceholders"

const getRawCssVars = () => getMiniYagsFile("variables.css")

const objectToString = (object: any) => {
  const vars: string[] = []
  Object.keys(object).forEach(key => {
    if (typeof object[key] === "object") {
      objectToString(object[key]).forEach(path => {
        vars.push(`${key}-${path}`)
      })
    } else {
      vars.push(key + `: ${object[key]};`)
    }
  })
  return vars
}

const getCssVarsFromObject = <T extends Record<string, unknown>>(
  object: T,
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

  const rawCss = getRawCssVars()

  return replacePlaceholders(rawCss, {
    colors: colorVars,
    spacing: spaceVars,
    maxWidth: maxWidth + "px",
    borderRadius: borderRadius + "px",
    shadow: shadow.shadow,
    fontSize: String(fontSize),
    font,
    displayImage: displayImg ? "block" : "none",
    groupCount: String(bookmarkGroups.length),
  })
}
