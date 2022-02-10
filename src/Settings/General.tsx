import { Section, Switch, TextInput } from "../components"
import { ImageInput } from "../components/TextInputs/ImageInput"
import { useGeneralSettings } from "../Providers"
import { Note } from "./fragments/Note"

export const General = () => {
  const [generalSettings, setGeneralSettings] = useGeneralSettings()

  const setTitle = (title: string) =>
    setGeneralSettings({ ...generalSettings, title })

  const setImg = (img: string) =>
    setGeneralSettings({ ...generalSettings, img })

  const setDispalyImg = (displayImg: boolean) =>
    setGeneralSettings({ ...generalSettings, displayImg })

  const setFont = (font: string) =>
    setGeneralSettings({ ...generalSettings, font })

  const setEnableFonts = (enableFonts: boolean) =>
    setGeneralSettings({ ...generalSettings, enableFonts })

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
      <br />
      <br />
      <TextInput label="Font" value={generalSettings.font} onChange={setFont} />
      <br />
      <br />
      <Switch
        checked={generalSettings.enableFonts}
        onChange={setEnableFonts}
        label="Google fonts"
      />
      <Note>
        Fonts are automatically fetched from{" "}
        <a href="https://fonts.google.com/">google fonts</a> if enabled and
        possible. But you can also use local fonts.
      </Note>
    </Section>
  )
}
