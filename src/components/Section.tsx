import { PropsWithChildren } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

const Title = styled.h2`
  ${({ theme: { color, space } }) => css`
    margin: 0;
    border-bottom: ${space.smallest} solid ${color.bg.shade};
  `}
`

const Wrapper = styled.div`
  ${({ theme: { space } }) => css`
    padding-bottom: ${space.largest};
    :last-of-type {
      padding-bottom: 0;
    }
  `}
`

type SectionProps = {
  title: string
}

export const Section = ({
  title,
  children,
}: PropsWithChildren<SectionProps>) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
)
