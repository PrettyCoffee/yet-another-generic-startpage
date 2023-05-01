import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { useFontSize } from "../../Providers"
import { Label, LabelProps } from "../Label"

const Area = styled.textarea<Pick<TextAreaProps, "invalid">>(
  ({ theme: { color, space }, invalid }) => {
    const fontSize = useFontSize()
    return css`
      font-size: ${fontSize}rem;
      height: calc(${space.medium} * 12);
      width: 100%;

      color: ${color.fg.surface};
      background-color: transparent;

      border: none;
      outline: none;
      border: ${space.smallest} solid ${color.fg.base};
      resize: vertical;

      :focus-visible {
        border-color: ${color.primary.base};
      }

      ${invalid &&
      css`
        &,
        :focus-visible {
          border-color: ${color.palette.red};
        }
      `}
    `
  }
)

export type TextAreaProps = LabelProps & {
  placeholder?: string
  value?: string
  className?: string
  autoFocus?: boolean
  invalid?: boolean
  onChange?: (value: string) => void
  onKeyPress?: (key: string) => void
}

export const TextArea = ({
  onChange,
  onKeyPress,
  label,
  invalid,
  ...delegated
}: TextAreaProps) => {
  const TextInput = (
    <Area
      invalid={invalid}
      onClick={click => click.stopPropagation()}
      onChange={event => onChange?.(event.currentTarget.value)}
      onKeyPress={event => onKeyPress?.(event.key)}
      {...delegated}
    />
  )

  if (label)
    return (
      <Label label={label} invalid={invalid}>
        {TextInput}
      </Label>
    )
  else return TextInput
}
