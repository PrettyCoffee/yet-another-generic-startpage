import { useState } from "react"

import styled from "@emotion/styled/macro"
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

  const handleSearch = () =>
    performSearch(value, engine, { directLink: true, forwardingLookup })

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
