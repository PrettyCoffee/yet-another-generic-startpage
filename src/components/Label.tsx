import { PropsWithChildren } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { useFontSize } from "../Providers"

const LabelWrapper = styled.label`
  height: fit-content;
`

const LabelText = styled.span<LabelProps>(({ theme: { color }, invalid }) => {
  const fontSize = useFontSize()
  return css`
    font-size: calc(${fontSize} * 0.75rem);
    display: block;
    ${invalid &&
    css`
      color: ${color.palette.red};
    `}
  `
})

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
