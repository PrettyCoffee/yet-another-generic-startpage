import { Section, Switch, TextInput } from "../components"
import { ImageInput } from "../components/TextInputs/ImageInput"
import { useGeneralSettings } from "../Providers"

export const General = () => {
  const [generalSettings, setGeneralSettings] = useGeneralSettings()

  const setTitle = (title: string) =>
    setGeneralSettings({ ...generalSettings, title })

  const setImg = (img: string) =>
    setGeneralSettings({ ...generalSettings, img })

  const setDispalyImg = (displayImg: boolean) =>
    setGeneralSettings({ ...generalSettings, displayImg })

  return (
    <Section title="General">
      <TextInput
        label="Title"
        value={generalSettings.title}
        onChange={setTitle}
      />
      <br />
      <br />
      <ImageInput label="Image" value={generalSettings.img} onChange={setImg} />
      <br />
      <br />
      <Switch
        checked={generalSettings.displayImg}
        onChange={setDispalyImg}
        label="Display image"
      />
    </Section>
  )
}
