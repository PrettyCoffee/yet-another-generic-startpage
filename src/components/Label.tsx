import { PropsWithChildren } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

const LabelWrapper = styled.label`
  height: fit-content;
`

const LabelText = styled.span<LabelProps>`
  ${({ theme: { color }, invalid }) => css`
    display: block;
    font-size: 0.75rem;
    ${invalid &&
    css`
      color: ${color.palette.red};
    `}
  `}
`

export type LabelProps = {
  label?: string
  invalid?: boolean
}

export const Label = ({
  label,
  children,
  ...delegated
}: PropsWithChildren<LabelProps>) => (
  <LabelWrapper>
    <LabelText {...delegated}>{label}</LabelText>
    {children}
  </LabelWrapper>
)
