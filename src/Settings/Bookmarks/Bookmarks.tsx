import { useBookmarks } from "@startpage/bookmarks"
import { Plus } from "react-feather"

import { Button, Section } from "../../components"
import { BookmarkGroup } from "./BookmarkGroup"
import { EditModeProvider } from "./fragments/EditModeContext"

export const Bookmarks = () => {
  const { bookmarkGroups, addGroup } = useBookmarks()

  const handleNewGroup = () => addGroup("New group")

  return (
    <EditModeProvider>
      <Section title="Bookmarks">
        {bookmarkGroups.map(group => (
          <BookmarkGroup key={group.id} {...group} />
        ))}
        <br />
        <Button onClick={handleNewGroup} disabled={bookmarkGroups.length >= 7}>
          New Group <Plus />
        </Button>
      </Section>
    </EditModeProvider>
  )
}
