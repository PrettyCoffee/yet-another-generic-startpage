import { useMemo, useState } from "react"

import styled from "@emotion/styled/macro"
import { useBookmarks } from "@startpage/bookmarks"
import { performSearch } from "@startpage/search"
import { Search } from "react-feather"

import { IconButton, TextInput, isWebUrl } from "../components"
import { useSearchSettings } from "../Providers"
import { searchEngines } from "../Settings/Search/fragments/SearchEngine"

const Layout = styled.div`
  display: flex;
  align-items: center;
`

const Input = styled(TextInput)`
  width: 100%;
`

export const Searchbar = () => {
  const [{ engine, placeholder, forwardingLookup }] = useSearchSettings()
  const [value, setValue] = useState("")

  const { bookmarkGroups } = useBookmarks()
  const bookmarkLookup = useMemo(() => {
    const lookup: Record<string, string> = {}
    bookmarkGroups.forEach(group =>
      group.bookmarks.forEach(
        bookmark => (lookup[bookmark.label] = bookmark.url)
      )
    )
    return lookup
  }, [bookmarkGroups])

  const performSearchWithCustomEngine = () => {
    const lookup = { ...bookmarkLookup, ...forwardingLookup }
    const link =
      isWebUrl(value) || lookup[value]
        ? value
        : engine.replace("{query}", value)
    performSearch(link, "startpage", {
      directLink: true,
      forwardingLookup: lookup,
    })
  }

  const performDefaultSearch = () =>
    performSearch(value, engine, {
      directLink: true,
      forwardingLookup: { ...bookmarkLookup, ...forwardingLookup },
    })

  const handleSearch = () =>
    searchEngines.includes(engine)
      ? performDefaultSearch()
      : performSearchWithCustomEngine()

  return (
    <Layout>
      <IconButton icon={Search} onClick={handleSearch} label="Search" />
      <Input
        value={value}
        placeholder={placeholder}
        autoFocus
        onChange={setValue}
        onKeyPress={key => key === "Enter" && handleSearch()}
      />
    </Layout>
  )
}
