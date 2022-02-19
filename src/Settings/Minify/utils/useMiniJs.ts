import { useBookmarks } from "@startpage/bookmarks"

import { useSearchSettings } from "../../../Providers"
import { getMiniYagsFile } from "./getMiniYagsFile"
import { replacePlaceholders } from "./replacePlaceholders"

const getRawJs = () => getMiniYagsFile("scripts.js")

export const useMiniJs = () => {
  const { bookmarkGroups } = useBookmarks()
  const [{ forwardingLookup, engine }] = useSearchSettings()

  let rawJs = getRawJs()
  rawJs = replacePlaceholders(rawJs, {
    bookmarks: JSON.stringify(bookmarkGroups),
    searchEngine: engine,
    searchLookup: JSON.stringify(forwardingLookup || {}),
  })

  return rawJs
}
