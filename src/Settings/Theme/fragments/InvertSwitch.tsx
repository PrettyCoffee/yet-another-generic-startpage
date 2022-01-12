import { Switch } from "../../../components"
import { ColorSetStateProps } from "../utils/ColorSet"

export const InvertSwitch = ({ colors, updateColors }: ColorSetStateProps) => {
  const handleInvert = (inverted: boolean) =>
    updateColors({
      ...colors,
      inverted,
    })

  return (
    <Switch
      checked={colors.inverted}
      onChange={handleInvert}
      label="Invert colors"
    />
  )
}
