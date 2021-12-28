import styled from "@emotion/styled/macro"

import { SwitchButton, Knob, Track } from "./fragments"

const Label = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  height: 2rem;
`

const LabelText = styled.span``

export interface CheckedProp {
  checked: boolean
}

type SwitchProps = {
  onChange?: (value: boolean) => void
  checked?: boolean
  label?: string
}

export const Switch = ({ onChange, label, checked = false }: SwitchProps) => {
  const handleClick = () => onChange?.(!checked)

  return (
    <Label>
      <SwitchButton role="switch" aria-checked={checked} onClick={handleClick}>
        <Knob checked={checked} />
        <Track />
      </SwitchButton>
      <LabelText>{label}</LabelText>
    </Label>
  )
}
