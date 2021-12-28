import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Icon } from "react-feather"

import { VisuallyHidden } from "."

const Button = styled.button`
  ${({ theme: { color, space } }) => css`
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
    width: calc(${space.medium} * 2);
    height: calc(${space.medium} * 2);
    color: ${color.primary.fg};

    :focus-visible,
    :hover {
      color: ${color.primary.base};
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
}

export const IconButton = ({ label, onClick, icon: Icon }: IconButtonProps) => (
  <Button onClick={onClick}>
    <Icon aria-hidden />
    {label ? <VisuallyHidden>{label}</VisuallyHidden> : null}
  </Button>
)
