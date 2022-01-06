import { Bookmark as BookmarkType, useBookmarks } from "@startpage/bookmarks"

import { useEditMode } from "../fragments/EditModeContext"
import { ItemEditMode } from "./fragments/ItemEditMode"
import { ItemViewMode } from "./fragments/ItemViewMode"

type BookmarkProps = BookmarkType & {
  group: string
}

export const Bookmark = ({ group, label, url }: BookmarkProps) => {
  const { editElement, setEditElement } = useEditMode()
  const { removeBookmark } = useBookmarks()

  const bookmarkId = group + label + url

  const editModeIsActive = editElement === bookmarkId

  const toggleMode = () =>
    setEditElement(editModeIsActive ? undefined : bookmarkId)
  const handleRemove = () => removeBookmark(group, label)
  const handleSave = (bookmark: BookmarkType) => {
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
