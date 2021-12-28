import styled from "@emotion/styled/macro"
import {
  Bookmark as BookmarkProps,
  BookmarkGroup,
  useBookmarks,
} from "@startpage/bookmarks"

import { Section } from "../components"

const BookmarkWrapper = styled.li``

const Bookmark = ({ label, url }: BookmarkProps) => {
  return (
    <BookmarkWrapper>
      {label} : {url}
    </BookmarkWrapper>
  )
}

const GroupWrapper = styled.ol`
  margin-bottom: 3rem;
  :last-of-type {
    margin-bottom: 0;
  }
`

const Group = ({ label, bookmarks }: BookmarkGroup) => {
  return (
    <>
      {label}
      <GroupWrapper>
        {bookmarks.map(bookmark => (
          <Bookmark key={label + bookmark.label} {...bookmark} />
        ))}
      </GroupWrapper>
    </>
  )
}

export const Bookmarks = () => {
  const { bookmarkGroups } = useBookmarks()
  return (
    <Section title="Bookmarks">
      <br />
      {bookmarkGroups.map(group => (
        <Group key={group.label} {...group} />
      ))}
    </Section>
  )
}
