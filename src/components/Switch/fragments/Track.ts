import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { SwitchButton } from "./SwitchButton"

export const Track = styled.span`
  ${({ theme: { color, space } }) => css`
    position: absolute;
    z-index: 0;
    height: 100%;
    width: 100%;

    border-radius: ${space.small};
    background-color: ${color.bg.surface};
    outline: ${color.fg.base} solid ${space.smallest};

    ${SwitchButton}:focus-visible > & {
      outline-color: ${color.primary.base};
      background: ${color.bg.highlight};
    }
  `}
`
