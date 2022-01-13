import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

export const RowText = styled.div`
  ${({ theme: { color, space } }) => css`
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    display: flex;
    align-items: center;

    div:hover > &:after {
      content: "";
      height: 0;
      display: block;
      flex: 1;
      border: 1px solid ${color.fg.shade};
      margin-left: ${space.medium};
      opacity: 0.5;
    }
  `}
`
