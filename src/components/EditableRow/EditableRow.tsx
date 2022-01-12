import { ItemEditMode } from "./fragments/ItemEditMode"
import { ItemViewMode } from "./fragments/ItemViewMode"

export type RowElement = {
  label: string
  url: string
}

type EditableRowProps = RowElement & {
  mode: "edit" | "view"
  designator: string
  toggleMode: () => void
  onRemove: () => void
  onEdit: (value: RowElement) => void
}

export const EditableRow = ({
  label,
  url,
  designator,
  mode,
  toggleMode,
  onRemove,
  onEdit,
}: EditableRowProps) => {
  const handleSave = (value: RowElement) => {
    onEdit(value)
    toggleMode()
  }
  const handleAbort = () => toggleMode()

  if (mode === "edit")
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
      designator={designator}
      onRemoveClick={onRemove}
      onEditClick={toggleMode}
    />
  )
}
