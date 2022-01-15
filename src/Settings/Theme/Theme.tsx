import { Accordion, Section } from "../../components"
import { Note } from "../fragments/Note"
import { AutoColoring } from "./fragments/AutoColoring"
import { PostColoring } from "./fragments/PostColoring"

export const Theme = () => {
  return (
    <Section title="Theme">
      <Accordion header={<h3>Auto coloring</h3>} defaultOpen>
        <AutoColoring />
      </Accordion>

      <Accordion header={<h3>Post coloring</h3>}>
        <PostColoring />
      </Accordion>
      <Note>
        Use <mark>auto coloring</mark> to set up your color theme and{" "}
        <mark>post coloring</mark> to adjust the details.
      </Note>
    </Section>
  )
}
