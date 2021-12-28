import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

export const Surface = styled.div`
  ${({ theme: { color, space } }) => css`
    display: flex;
    color: ${color.fg.surface};
    background-color: ${color.bg.surface};

    box-shadow: ${space.small} ${space.small} 0 ${color.primary.bg};
    border: ${space.smallest} solid ${color.primary.base};
    overflow: hidden;
  `}
`
