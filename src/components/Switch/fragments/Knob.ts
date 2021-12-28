import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { CheckedProp } from "../Switch"

export const Knob = styled.span<CheckedProp>`
  ${({ theme: { color }, checked }) => css`
    position: absolute;
    z-index: 2;
    width: calc(50% - 4px);
    height: calc(100% - 4px);
    transform: translateX(calc(-50% - 2px));

    transition: transform 0.2s;
    background-color: ${color.fg.highlight};
    border-radius: 50%;

    ${checked &&
    css`
      transform: translateX(calc(50% + 2px));
    `}
  `}
`
