import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Check } from "react-feather"

const Label = styled.label`
  ${({ theme: { space } }) => css`
    cursor: pointer;
    height: calc(${space.medium} * 2);
    margin: ${space.medium};

    display: inline-flex;
    align-items: center;
    gap: ${space.medium};
  `}
`

const Box = styled.span`
  ${({ theme: { space, color } }) => css`
    position: relative;
    height: ${space.medium};
    width: ${space.medium};

    display: inline-flex;
    align-items: center;

    border: ${color.fg.base} solid ${space.smallest};
    outline: none;

    :focus-visible {
      border-color: ${color.primary.base};
      background: ${color.bg.highlight};
      transform: scale(1.3);
    }

    label:hover > & {
      background-color: ${color.bg.shade};
    }

    > svg {
      display: none;
      position: absolute;
      width: 24px;
      bottom: -4px;
      left: -2px;
    }
    &[aria-checked="true"] > svg {
        display: block;
      }
    }
  `}
`

const LabelText = styled.span``

type CheckboxProps = {
  checked: boolean
  onChange?: (checked: boolean) => void
  label: string
}

export const Checkbox = ({ checked, onChange, label }: CheckboxProps) => {
  const handleChange = () => onChange?.(!checked)
  const handleKeyPress = (key: string) => key === " " && handleChange()

  return (
    <Label onClick={handleChange}>
      <Box
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        onKeyPress={event => handleKeyPress(event.key)}
      >
        <Check />
      </Box>
      <LabelText>{label}</LabelText>
    </Label>
  )
}
