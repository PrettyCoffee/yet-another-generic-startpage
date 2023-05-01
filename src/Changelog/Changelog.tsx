import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { Section, Surface } from "../components"
import { useGeneralSettings } from "../Providers"
import { changelog } from "./data"
import { useFontSize } from "../Providers/GeneralSettings"

const SettingsSurface = styled(Surface)(({ theme: { space } }) => {
  const fontSize = useFontSize()
  return css`
    display: block;
    overflow-y: auto;
    max-height: calc(100vh - 6rem);
    padding: ${space.large};

    h2 {
      font-size: ${fontSize}rem;
    }
  `
})

export const Changelog = () => (
  <SettingsSurface>
    <h1>Changelog</h1>
    {changelog.map(({ version, changes }) => (
      <Section title={version} key={version}>
        <ul>
          {changes.map((change, index) => (
            <li key={index}>{change}</li>
          ))}
        </ul>
      </Section>
    ))}
  </SettingsSurface>
)
