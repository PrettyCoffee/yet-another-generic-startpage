import {
  Bookmark as BookmarkProps,
  BookmarkWithoutId,
  useBookmarks,
} from "@startpage/bookmarks"

import { useEditMode } from "../fragments/EditModeContext"
import { ItemEditMode } from "./fragments/ItemEditMode"
import { ItemViewMode } from "./fragments/ItemViewMode"

export const Bookmark = ({ id, label, url }: BookmarkProps) => {
  const { editElement, setEditElement } = useEditMode()
  const { removeBookmark } = useBookmarks()

  const editModeIsActive = editElement === id

  const toggleMode = () => setEditElement(editModeIsActive ? undefined : id)

  const handleRemove = () => removeBookmark(id)
  const handleSave = (bookmark: BookmarkWithoutId) => {
    console.log(bookmark)
    toggleMode()
  }
  const handleAbort = () => toggleMode()

  if (editModeIsActive)
    return (
      <ItemEditMode
        label={label}
        url={url}
        onSave={handleSave}
        onAbort={handleAbort}
      />
    )

  return (
    <ItemViewMode
      label={label}
      url={url}
      onRemove={handleRemove}
      onEdit={toggleMode}
    />
  )
}
