import { useBookmarks } from "@startpage/bookmarks"

import { useSearchSettings } from "../../../Providers"
import { replacePlaceholders } from "./replacePlaceholders"
import { rawScripts } from "./rawFiles"

export const useMiniJs = () => {
  const { bookmarkGroups } = useBookmarks()
  const [{ forwardingLookup, engine }] = useSearchSettings()

  return replacePlaceholders(rawScripts, {
    bookmarks: JSON.stringify(bookmarkGroups),
    searchEngine: engine,
    searchLookup: JSON.stringify(forwardingLookup || {}),
  })
}
