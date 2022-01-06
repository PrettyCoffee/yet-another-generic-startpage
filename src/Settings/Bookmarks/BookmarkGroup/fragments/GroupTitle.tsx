import { useBookmarks } from "@startpage/bookmarks"

import { useEditMode } from "../../fragments/EditModeContext"
import { EditMode } from "./EditMode"
import { ViewMode } from "./ViewMode"

export type GroupTitleProps = {
  label: string
  bookmarkCount: number
}

export const GroupTitle = ({ label, bookmarkCount }: GroupTitleProps) => {
  const { editElement, setEditElement } = useEditMode()
  const { removeGroup, addBookmark } = useBookmarks()

  const groupId = label

  const handleEdit = () => setEditElement(groupId)
  const handleSave = (label: string) => {
    console.log(label)
    setEditElement()
  }
  const handleAbort = () => setEditElement()
  const handleRemove = () => removeGroup(label)
  const handleNewBookmark = () =>
    addBookmark(label, { label: "New bookmark", url: "" })

  if (editElement === groupId)
    return <EditMode label={label} onSave={handleSave} onAbort={handleAbort} />

  return (
    <ViewMode
      label={label}
      onEdit={handleEdit}
      onRemove={handleRemove}
      bookmarkCount={bookmarkCount}
      addBookmark={handleNewBookmark}
    />
  )
}
