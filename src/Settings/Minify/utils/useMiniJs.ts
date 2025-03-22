import { useBookmarks } from "@startpage/bookmarks"

import { rawScripts } from "./rawFiles"
import { replacePlaceholders } from "./replacePlaceholders"
import { useSearchSettings } from "../../../Providers"

export const useMiniJs = () => {
  const { bookmarkGroups } = useBookmarks()
  const [{ forwardingLookup, engine }] = useSearchSettings()

  return replacePlaceholders(rawScripts, {
    bookmarks: JSON.stringify(bookmarkGroups),
    searchEngine: engine,
    searchLookup: JSON.stringify(forwardingLookup || {}),
  })
}
