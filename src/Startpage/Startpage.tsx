import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { Bookmarks } from "./Bookmarks"
import { Headline } from "./Headline"
import { Image } from "./Image"
import { Searchbar } from "./Searchbar"
import { Surface } from "../components/Surface"

const Content = styled.div`
  ${({ theme: { space } }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${space.large};
    gap: ${space.large};
    overflow-x: hidden;
  `}
`

export const Startpage = () => (
  <Surface>
    <Image />
    <Content>
      <Headline />
      <Searchbar />
      <Bookmarks />
    </Content>
  </Surface>
)
