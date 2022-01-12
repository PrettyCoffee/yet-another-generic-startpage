import { TextInput } from "../../../components"
import { useSearchSettings } from "../../../Providers"

export const SearchPlaceholder = () => {
  const [searchSettings, setSearchSettings] = useSearchSettings()

  const setSearchPlaceholder = (placeholder: string) =>
    setSearchSettings({ ...searchSettings, placeholder })

  return (
    <TextInput
      label="Searchbar placeholder"
      value={searchSettings.placeholder}
      onChange={setSearchPlaceholder}
    />
  )
}
