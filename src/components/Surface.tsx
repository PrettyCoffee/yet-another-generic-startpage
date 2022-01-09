import { PropsWithChildren } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { useSettings } from "../Providers"

export const Container = styled.div<{ shadow?: string }>`
  ${({ theme: { color, space }, shadow }) => css`
    display: flex;
    color: ${color.fg.surface};
    background-color: ${color.bg.surface};

    box-shadow: ${shadow};
    border: ${space.smallest} solid ${color.primary.base};
    overflow: hidden;
  `}
`

type SurfaceProps = {
  className?: string
}

export const Surface = ({ ...delegated }: PropsWithChildren<SurfaceProps>) => {
  const [{ surfaceShadow }] = useSettings()

  return <Container shadow={surfaceShadow?.shadow} {...delegated} />
}
