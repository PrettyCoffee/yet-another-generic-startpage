import { useState } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { SearchEngineName } from "@startpage/search"

import { Select, TextInput, isWebUrl } from "../../../components"
import { useSearchSettings } from "../../../Providers"

export const searchEngines = ["duckduckgo", "google", "startpage", "ecosia"]

const FlexRow = styled.div(
  ({ theme: { space } }) => css`
    display: flex;
    gap: ${space.medium};
    > label {
      flex: 1;
    }
  `
)

const isValidEngineLink = (link: string) =>
  isWebUrl(link) && link.includes("{query}")

export const SearchEngine = () => {
  const [searchSettings, setSearchSettings] = useSearchSettings()
  const { engine } = searchSettings
  const isPredefinedEngine = searchEngines.includes(engine)
  const [value, setValue] = useState(isPredefinedEngine ? "" : engine)

  const setSearchEngine = (engine: string) =>
    setSearchSettings({ ...searchSettings, engine: engine as SearchEngineName })

  const handleInputChange = (value: string) => {
    setValue(value)
    if (isValidEngineLink(value)) setSearchEngine(value)
  }

  const handleSelectChange = (value: string) => {
    setValue("")
    setSearchEngine(value)
  }

  return (
    <FlexRow>
      <Select
        placeholder="Select engine"
        label="Search engine"
        value={isPredefinedEngine ? engine : undefined}
        onChange={handleSelectChange}
        options={searchEngines.map(engine => ({
          value: engine,
          label: engine,
        }))}
      />
      <TextInput
        label="Custom search engine"
        placeholder="e.g. https://search.brave.com/search?q={query}"
        value={value}
        onChange={handleInputChange}
        invalid={!!value && !isValidEngineLink(value)}
      />
    </FlexRow>
  )
}
