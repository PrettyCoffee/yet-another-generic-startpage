import { BookmarkGroup as Group } from "@startpage/bookmarks"

import { Accordion } from "../../../components"
import { Bookmark } from "../Bookmark"
import { GroupTitle } from "./fragments/GroupTitle"

export const BookmarkGroup = ({ id, label, bookmarks }: Group) => {
  const GroupHeader = (
    <GroupTitle id={id} label={label} bookmarkCount={bookmarks.length} />
  )

  return (
    <Accordion header={GroupHeader} buttonLabel={`${label} bookmarks`}>
      {bookmarks.map(bookmark => (
        <Bookmark key={bookmark.id} {...bookmark} />
      ))}
    </Accordion>
  )
}
