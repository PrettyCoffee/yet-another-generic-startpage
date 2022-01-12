import { useState } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Plus } from "react-feather"

import { Accordion, EditableRow, IconButton } from "../../../components"
import { useSearchSettings } from "../../../Providers"

const HeaderWrapper = styled.div`
  ${({ theme: { space } }) => css`
    display: flex;
    align-items: center;
    gap: ${space.small};
  `}
`

const Title = styled.h3`
  margin: 0;
`

const findNewKey = (object: Record<string, string>) => {
  const baseKey = "New Lookup"
  if (object[baseKey] === undefined) return baseKey

  let i = 0
  while (object[baseKey + "-" + i] !== undefined) i++
  return baseKey + "-" + i
}

export const SearchLookup = () => {
  const [active, setActive] = useState<string>()
  const [searchSettings, setSearchSettings] = useSearchSettings()

  const { forwardingLookup = {} } = searchSettings
  const lookupKeys = Object.keys(forwardingLookup)

  const handleActiveChange = (value: string) =>
    active === value ? setActive(undefined) : setActive(value)

  const handleAdd = () => {
    const copy = { ...forwardingLookup }
    const newKey = findNewKey(copy)
    copy[newKey] = ""
    setSearchSettings({ ...searchSettings, forwardingLookup: copy })
  }

  const handleEdit = (label: string, url: string) => {
    const copy = { ...forwardingLookup }
    copy[label] = url
    setSearchSettings({ ...searchSettings, forwardingLookup: copy })
  }

  const handleRemove = (key: string) => {
    const copy = { ...forwardingLookup }
    delete copy[key]
    setSearchSettings({ ...searchSettings, forwardingLookup: copy })
  }

  const header = (
    <HeaderWrapper>
      <Title>Search lookup</Title>
      <IconButton
        icon={Plus}
        onClick={handleAdd}
        label="Add new search lookup element"
      />
    </HeaderWrapper>
  )
  return (
    <Accordion header={header} buttonLabel="lookup accordion">
      {lookupKeys.map(key => (
        <EditableRow
          key={key}
          designator="lookup"
          label={key}
          url={forwardingLookup[key]}
          mode={active === key ? "edit" : "view"}
          toggleMode={() => handleActiveChange(key)}
          onEdit={({ label, url }) => handleEdit(label, url)}
          onRemove={() => handleRemove(key)}
        />
      ))}
    </Accordion>
  )
}
