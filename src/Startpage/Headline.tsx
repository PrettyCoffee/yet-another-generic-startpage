import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { useGeneralSettings } from "../Providers"

const H1 = styled.h1`
  ${({ theme: { color, space } }) => css`
    color: ${color.primary.fg};
    font-size: ${space.large};
    font-weight: 500;
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
  `}
`

export const Headline = () => {
  const [{ title }] = useGeneralSettings()
  return <H1 tabIndex={-1}>{title}</H1>
}
