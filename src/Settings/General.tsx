import { SearchEngineName } from "@startpage/search"

import { Section, Select, TextInput } from "../components"
import { ImageInput } from "../components/TextInputs/ImageInput"
import { useGeneralSettings, useSearchSettings } from "../Providers"

export const General = () => {
  const [generalSettings, setGeneralSettings] = useGeneralSettings()
  const [searchSettings, setSearchSettings] = useSearchSettings()

  const setTitle = (title: string) =>
    setGeneralSettings({ ...generalSettings, title })

  const setImg = (img: string) =>
    setGeneralSettings({ ...generalSettings, img })

  const setSearchPlaceholder = (placeholder: string) =>
    setSearchSettings({ ...searchSettings, placeholder })

  const setSearchEngine = (engine: string) =>
    setSearchSettings({ ...searchSettings, engine: engine as SearchEngineName })

  return (
    <Section title="General">
      <br />
      <ImageInput label="Image" value={generalSettings.img} onChange={setImg} />
      <br />
      <br />
      <TextInput
        label="Title"
        value={generalSettings.title}
        onChange={setTitle}
      />
      <br />
      <br />
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
