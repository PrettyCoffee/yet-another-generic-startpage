import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { useFontSize } from "../../Providers"
import { SwitchButton, Knob, Track } from "./fragments"

const Label = styled.label(() => {
  const fontSize = useFontSize()
  return css`
    font-size: ${fontSize}rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    height: 2rem;
  `
})

const LabelText = styled.span(() => {
  return css``
})

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
