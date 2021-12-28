import { SearchEngineName } from "@startpage/search"

import { Section, Select, TextInput } from "../components"
import { ImageInput } from "../components/TextInputs/ImageInput"
import { useSettings } from "../Providers"

type GeneralSettings = "title" | "img" | "searchPlaceholder"

export const General = () => {
  const [settings, setSettings] = useSettings()

  const changeSetting = (key: GeneralSettings, value: string) => {
    const cpy = { ...settings }
    cpy[key] = value
    setSettings(cpy)
  }

  const setTitle = (value: string) => changeSetting("title", value)

  const setImg = (value: string) => changeSetting("img", value)

  const setSearchPlaceholder = (value: string) =>
    changeSetting("searchPlaceholder", value)

  const setSearchEngine = (value: string) => {
    const cpy = { ...settings }
    cpy["searchEngine"] = value as SearchEngineName
    setSettings(cpy)
  }

  return (
    <Section title="General">
      <br />
      <ImageInput label="Image" value={settings.img} onChange={setImg} />
      <br />
      <br />
      <TextInput label="Title" value={settings.title} onChange={setTitle} />
      <br />
      <br />
      <TextInput
        label="Searchbar placeholder"
        value={settings.searchPlaceholder}
        onChange={setSearchPlaceholder}
      />
      <br />
      <br />
      <Select
        label="Search engine"
        value={settings.searchEngine}
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
