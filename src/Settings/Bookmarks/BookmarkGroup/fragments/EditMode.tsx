import { useState } from "react"

import { Save, X } from "react-feather"

import { TitleLayout } from "./TitleLayout"
import { IconButton, TextInput } from "../../../../components"

interface EditModeProps {
  label: string
  onSave: (label: string) => void
  onAbort: () => void
}

export const EditMode = ({ label, onSave, onAbort }: EditModeProps) => {
  const [newLabel, setNewLabel] = useState(label)

  return (
    <TitleLayout>
      <div>
        <TextInput value={newLabel} onChange={setNewLabel} />
      </div>
      <div>
        <IconButton
          icon={Save}
          label={`Save changes`}
          onClick={() => onSave(newLabel)}
        />
        <IconButton icon={X} label={`Discard changes`} onClick={onAbort} />
      </div>
    </TitleLayout>
  )
}
