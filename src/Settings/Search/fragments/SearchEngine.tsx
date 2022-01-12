import { SearchEngineName } from "@startpage/search"

import { Select } from "../../../components"
import { useSearchSettings } from "../../../Providers"

export const SearchEngine = () => {
  const [searchSettings, setSearchSettings] = useSearchSettings()

  const setSearchEngine = (engine: string) =>
    setSearchSettings({ ...searchSettings, engine: engine as SearchEngineName })

  return (
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
  )
}
