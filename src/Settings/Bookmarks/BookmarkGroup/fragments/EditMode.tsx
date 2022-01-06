import { useState } from "react"

import { Save, X } from "react-feather"

import { IconButton, TextInput } from "../../../../components"
import { TitleLayout } from "./TitleLayout"

type EditModeProps = {
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
