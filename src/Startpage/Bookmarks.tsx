import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { BookmarkGroup, useBookmarks } from "@startpage/bookmarks"

import { useFontSize } from "../Providers"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: auto;
`
const GroupWrapper = styled.div<Pick<GroupProps, "count">>`
  ${({ count }) => css`
    display: inline-block;
    width: calc(100% / ${count});
  `}
`
const Title = styled.h2(({ theme: { color } }) => {
  const fontSize = useFontSize()
  return css`
    color: ${color.secondary.fg};
    font-size: ${fontSize}rem;
    font-weight: 500;
    margin: 0;
  `
})
const LinkGroup = styled.ul`
  ${({ theme: { space } }) => css`
    margin: 0;
    padding: 0;
    padding-right: ${space.medium};
  `}
`
const Link = styled.li`
  position: relative;
  list-style: none;
  > a {
    display: block;
    padding: 2px 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    width: 100%;
    outline: none;
    :hover::before,
    :focus-visible::before {
      content: ">";
      position: absolute;
      left: -0.75rem;
    }
  }
`

type GroupProps = BookmarkGroup & { count: number }

const Group = ({ bookmarks, label, count }: GroupProps) => (
  <GroupWrapper count={count}>
    <Title>{label}</Title>
    <LinkGroup>
      {bookmarks.map(({ label, url, id }) => (
        <Link key={id}>
          <a href={url}>{label}</a>
        </Link>
      ))}
    </LinkGroup>
  </GroupWrapper>
)

export const Bookmarks = () => {
  const { bookmarkGroups } = useBookmarks()
  return (
    <Wrapper>
      {bookmarkGroups.map((group, index) => (
        <Group
          key={group.label + index}
          count={bookmarkGroups.length}
          {...group}
        />
      ))}
    </Wrapper>
  )
}
