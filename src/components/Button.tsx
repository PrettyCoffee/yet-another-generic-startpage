import { PropsWithChildren } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

const NativeButton = styled.button`
  ${({ theme: { space, color } }) => css`
    height: calc(${space.medium} * 2);
    padding: 0 ${space.medium};

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${space.small};

    cursor: pointer;
    color: inherit;
    background-color: transparent;
    outline: none;
    border: none;
    border: ${color.fg.base} solid ${space.smallest};

    > svg {
      height: 1.2rem;
    }

    :hover {
      background-color: ${color.bg.highlight};
    }
    :focus-visible {
      border-color: ${color.primary.base};
    }
  `}
`

type ButtonProps = {
  onClick?: () => void
}

export const Button = ({
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) => (
  <NativeButton onClick={onClick}>{children}</NativeButton>
)
