import { BaseColors } from "@startpage/preset"

import { ColorInput } from "../../../components"
import { CenterLayout } from "../../fragments/CenterLayout"
import { ColorSetStateProps } from "../utils/ColorSet"

export const ColorFields = ({ colors, updateColors }: ColorSetStateProps) => {
  const setColor = (key: keyof BaseColors, value: string) => {
    const colorsCopy = { ...colors }
    colorsCopy[key] = value
    updateColors({
      ...colorsCopy,
      name: "custom",
    })
  }

  const setBg = (value: string) => setColor("bg", value)

  const setFg = (value: string) => setColor("fg", value)

  const setPrimary = (value: string) => setColor("primary", value)

  const setSecondary = (value: string) => setColor("secondary", value)

  return (
    <CenterLayout>
      <ColorInput label="Background" value={colors.bg} onChange={setBg} />
      <ColorInput label="Foreground" value={colors.fg} onChange={setFg} />
      <ColorInput
        label="Primary"
        value={colors.primary}
        onChange={setPrimary}
      />
      <ColorInput
        label="Secondary"
        value={colors.secondary}
        onChange={setSecondary}
      />
    </CenterLayout>
  )
}
