import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { Surface as SurfaceElement } from "../components"
import { Backup } from "./Backup"
import { Bookmarks } from "./Bookmarks"
import { CustomCss } from "./CustomCss"
import { DangerZone } from "./DangerZone"
import { General } from "./General"
import { Minify } from "./Minify"
import { Search } from "./Search"
import { Surface } from "./Surface"
import { Theme } from "./Theme"

const SettingsSurface = styled(SurfaceElement)`
  ${({ theme: { space } }) => css`
    display: block;
    overflow-y: auto;
    max-height: calc(100vh - 6rem);
    padding: ${space.large};
  `}
`

export const Settings = () => (
  <SettingsSurface>
    <General />
    <Search />
    <Theme />
    <Surface />
    <Bookmarks />
    <CustomCss />
    <Backup />
    <Minify />
    <DangerZone />
  </SettingsSurface>
)
