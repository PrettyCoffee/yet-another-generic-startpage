import { createContext, PropsWithChildren, useContext, useState } from "react"

interface EditModeState {
  editElement?: string
  setEditElement: (id?: string) => void
}

const defaultState: EditModeState = {
  setEditElement: () => null,
}

const Context = createContext<EditModeState>(defaultState)

export const EditModeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [editElement, setEditElement] = useState<string>()
  return (
    <Context.Provider value={{ editElement, setEditElement }}>
      {children}
    </Context.Provider>
  )
}
export const useEditMode = () => useContext(Context)
