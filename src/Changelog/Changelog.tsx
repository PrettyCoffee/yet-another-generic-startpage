import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { Section, Surface } from "../components"
import { changelog } from "./data"

const SettingsSurface = styled(Surface)`
  ${({ theme: { space } }) => css`
    display: block;
    overflow-y: auto;
    max-height: calc(100vh - 6rem);
    padding: ${space.large};
  `}
`

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
