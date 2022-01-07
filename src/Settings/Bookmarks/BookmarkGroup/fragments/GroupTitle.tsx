import { useBookmarks } from "@startpage/bookmarks"

import { useEditMode } from "../../fragments/EditModeContext"
import { EditMode } from "./EditMode"
import { ViewMode } from "./ViewMode"

export type GroupTitleProps = {
  id: string
  label: string
  bookmarkCount: number
}

export const GroupTitle = ({ id, label, bookmarkCount }: GroupTitleProps) => {
  const { editElement, setEditElement } = useEditMode()
  const { removeGroup, addBookmark, editGroup } = useBookmarks()

  const handleEdit = () => setEditElement(id)
  const handleSave = (newLabel: string) => {
    editGroup(id, newLabel)
    setEditElement()
  }
  const handleAbort = () => setEditElement()
  const handleRemove = () => removeGroup(id)
  const handleNewBookmark = () =>
    addBookmark(id, { label: "New bookmark", url: "" })

  if (editElement === id)
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
