import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

export const TitleLayout = styled.div`
  ${({ theme: { space } }) => css`
    height: 4rem;
    display: flex;
    align-items: center;
    gap: ${space.small};
  `}
`
