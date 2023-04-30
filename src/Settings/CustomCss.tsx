import { Section, TextArea } from "../components"
import { useCustomCss } from "../Providers/CustomCss"

export const CustomCss = () => {
  const [customCss, setCustomCss] = useCustomCss()

  return (
    <Section title="Global custom styles">
      <TextArea label="Css" value={customCss} onChange={setCustomCss} />
    </Section>
  )
}
