import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Icon } from "react-feather"

import { VisuallyHidden } from "."

const Button = styled.button`
  ${({ theme: { color, space } }) => css`
    width: calc(${space.medium} * 2);
    height: calc(${space.medium} * 2);

    display: inline-flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    border: none;
    outline: none;

    :enabled {
      cursor: pointer;
      color: ${color.primary.fg};

      :focus-visible,
      :hover {
        color: ${color.primary.base};
      }
    }
    :focus-visible {
      background: ${color.bg.highlight};
      outline: ${space.smallest} solid ${color.fg.shade};
    }

    :disabled {
      color: ${color.fg.shade};
    }

    > svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  `}
`

type IconButtonProps = {
  label?: string
  onClick?: () => void
  icon: Icon
  disabled?: boolean
}

export const IconButton = ({
  label,
  onClick,
  icon: Icon,
  disabled,
}: IconButtonProps) => (
  <Button
    onClick={click => {
      onClick?.()
      click.stopPropagation()
    }}
    onKeyDown={key => key.stopPropagation()}
    title={label}
    disabled={disabled}
  >
    <Icon aria-hidden />
    {label ? <VisuallyHidden>{label}</VisuallyHidden> : null}
  </Button>
)
