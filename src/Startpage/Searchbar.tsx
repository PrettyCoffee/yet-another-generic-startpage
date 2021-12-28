import { useState } from "react"

import styled from "@emotion/styled/macro"
import { performSearch } from "@startpage/search"
import { Search } from "react-feather"

import { IconButton, TextInput } from "../components"
import { useSettings } from "../Providers"

const Layout = styled.div`
  display: flex;
  align-items: center;
`

const Input = styled(TextInput)`
  width: 100%;
`

export const Searchbar = () => {
  const [{ searchEngine, searchPlaceholder }] = useSettings()
  const [value, setValue] = useState("")

  const handleSearch = () =>
    performSearch(value, searchEngine, { directLink: true })

  return (
    <Layout>
      <IconButton icon={Search} onClick={handleSearch} label="Search" />
      <Input
        value={value}
        placeholder={searchPlaceholder}
        autoFocus
        onChange={setValue}
        onKeyPress={key => key === "Enter" && handleSearch()}
      />
    </Layout>
  )
}
