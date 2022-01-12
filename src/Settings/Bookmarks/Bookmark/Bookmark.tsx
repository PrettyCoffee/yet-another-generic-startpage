import {
  Bookmark as BookmarkProps,
  BookmarkWithoutId,
  useBookmarks,
} from "@startpage/bookmarks"

import { EditableRow } from "../../../components"
import { useEditMode } from "../fragments/EditModeContext"

export const Bookmark = ({ id, label, url }: BookmarkProps) => {
  const { editElement, setEditElement } = useEditMode()
  const { editBookmark, removeBookmark } = useBookmarks()

  const editModeIsActive = editElement === id

  const toggleMode = () => setEditElement(editModeIsActive ? undefined : id)

  const handleRemove = () => removeBookmark(id)
  const handleSave = (bookmark: BookmarkWithoutId) => {
    editBookmark(id, bookmark)
    toggleMode()
  }

  return (
    <EditableRow
      label={label}
      url={url}
      designator="bookmark"
      mode={editModeIsActive ? "edit" : "view"}
      onEdit={handleSave}
      onRemove={handleRemove}
      toggleMode={toggleMode}
    />
  )
}
