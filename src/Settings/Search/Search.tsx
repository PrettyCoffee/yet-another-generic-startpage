import { Section } from "../../components"
import { SearchEngine } from "./fragments/SearchEngine"
import { SearchLookup } from "./fragments/SearchLookup"
import { SearchPlaceholder } from "./fragments/SearchPlaceholder"

export const Search = () => (
  <Section title="Search">
    <SearchPlaceholder />
    <br />
    <br />
    <SearchEngine />
    <br />
    <SearchLookup />
  </Section>
)
