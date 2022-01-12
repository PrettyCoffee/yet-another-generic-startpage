import { SearchEngineName } from "@startpage/search"

import { Section, Select, TextInput } from "../components"
import { useSearchSettings } from "../Providers"

export const Search = () => {
  const [searchSettings, setSearchSettings] = useSearchSettings()

  const setSearchPlaceholder = (placeholder: string) =>
    setSearchSettings({ ...searchSettings, placeholder })

  const setSearchEngine = (engine: string) =>
    setSearchSettings({ ...searchSettings, engine: engine as SearchEngineName })

  return (
    <Section title="Search">
      <TextInput
        label="Searchbar placeholder"
        value={searchSettings.placeholder}
        onChange={setSearchPlaceholder}
      />
      <br />
      <br />
      <Select
        label="Search engine"
        value={searchSettings.engine}
        onChange={setSearchEngine}
        options={[
          {
            value: "duckduckgo",
            label: "duckduckgo",
          },
          { value: "google", label: "google" },
          { value: "startpage", label: "startpage" },
          { value: "ecosia", label: "ecosia" },
        ]}
      />
    </Section>
  )
}
