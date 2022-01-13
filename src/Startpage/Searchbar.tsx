import { useMemo, useState } from "react"

import styled from "@emotion/styled/macro"
import { useBookmarks } from "@startpage/bookmarks"
import { performSearch } from "@startpage/search"
import { Search } from "react-feather"

import { IconButton, TextInput } from "../components"
import { useSearchSettings } from "../Providers"

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

  const handleSearch = () =>
    performSearch(value, engine, {
      directLink: true,
      forwardingLookup: { ...bookmarkLookup, ...forwardingLookup },
    })

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
