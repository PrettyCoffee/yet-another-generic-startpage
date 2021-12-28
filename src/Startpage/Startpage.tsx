import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { Surface } from "../components/Surface"
import { Bookmarks } from "./Bookmarks"
import { Headline } from "./Headline"
import { Image } from "./Image"
import { Searchbar } from "./Searchbar"

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

export const Startpage = () => {
  return (
    <Surface>
      <Image />
      <Content>
        <Headline />
        <Searchbar />
        <Bookmarks />
      </Content>
    </Surface>
  )
}
