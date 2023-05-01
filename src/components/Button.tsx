import { PropsWithChildren } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { useFontSize } from "../Providers"

const NativeButton = styled.button(({ theme: { space, color } }) => {
  const fontSize = useFontSize()
  return css`
    font-size: ${fontSize}rem;
    height: calc(${space.medium} * 2);
    padding: 0 ${space.medium};

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${space.small};

    color: inherit;
    background-color: transparent;
    outline: none;
    border: solid ${space.smallest};

    > svg {
      height: 1.2rem;
    }

    :enabled {
      cursor: pointer;
      border-color: ${color.fg.base};
      :hover {
        background: ${color.bg.highlight};
      }
      :focus-visible {
        background: ${color.bg.highlight};
        border-color: ${color.primary.base};
      }
    }

    :disabled {
      cursor: default;
      color: ${color.fg.shade};
      border-color: ${color.fg.shade};
    }
  `
})

type ButtonProps = {
  onClick?: () => void
  disabled?: boolean
}

export const Button = ({ ...delegated }: PropsWithChildren<ButtonProps>) => (
  <NativeButton {...delegated} />
)
