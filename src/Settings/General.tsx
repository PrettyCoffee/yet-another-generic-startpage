import { Section, TextInput } from "../components"
import { ImageInput } from "../components/TextInputs/ImageInput"
import { useGeneralSettings } from "../Providers"

export const General = () => {
  const [generalSettings, setGeneralSettings] = useGeneralSettings()

  const setTitle = (title: string) =>
    setGeneralSettings({ ...generalSettings, title })

  const setImg = (img: string) =>
    setGeneralSettings({ ...generalSettings, img })

  return (
    <Section title="General">
      <ImageInput label="Image" value={generalSettings.img} onChange={setImg} />
      <br />
      <br />
      <TextInput
        label="Title"
        value={generalSettings.title}
        onChange={setTitle}
      />
      <br />
    </Section>
  )
}
