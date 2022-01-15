import { PropsWithChildren } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { CenterLayout } from "./CenterLayout"

const Text = styled(CenterLayout)`
  ${({ theme: { space, color } }) => css`
    margin-top: ${space.medium};
    color: ${color.fg.base};
    mark {
      color: ${color.fg.surface};
      background-color: transparent;
    }
    a {
      color: ${color.primary.fg};
      text-decoration: underline;
      :hover {
        color: ${color.primary.base};
      }
    }
  `}
`

export const Note = ({ children }: PropsWithChildren<unknown>) => (
  <Text as="p">Note: {children}</Text>
)
