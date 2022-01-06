import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { BookmarkGroup as Group } from "@startpage/bookmarks"

import { Bookmark } from "../Bookmark"
import { GroupTitle } from "./fragments/GroupTitle"

const Wrapper = styled.div`
  ${({ theme: { space } }) => css`
    margin-bottom: ${space.largest};
  `}
`

export const BookmarkGroup = ({ label, bookmarks }: Group) => (
  <>
    <GroupTitle label={label} bookmarkCount={bookmarks.length} />
    <Wrapper>
      {bookmarks.map(bookmark => (
        <Bookmark key={label + bookmark.label} group={label} {...bookmark} />
      ))}
    </Wrapper>
  </>
)
