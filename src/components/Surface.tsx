import { PropsWithChildren } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { useSettings } from "../Providers"

type ContainerProps = {
  shadow?: string
  borderRadius: number
}

export const Container = styled.div<ContainerProps>`
  ${({ theme: { color, space }, shadow, borderRadius }) => css`
    display: flex;
    color: ${color.fg.surface};
    background-color: ${color.bg.surface};
    border-radius: ${borderRadius}px;

    box-shadow: ${shadow};
    border: ${space.smallest} solid ${color.primary.base};
    overflow: hidden;

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background: ${color.bg.shade};
      border-radius: ${borderRadius}px;
      margin: ${borderRadius * 0.75}px 0;
    }

    &::-webkit-scrollbar-thumb {
      background: ${color.fg.base};
      border-radius: ${borderRadius}px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${color.fg.shade};
    }
  `}
`

type SurfaceProps = {
  className?: string
}

export const Surface = ({ ...delegated }: PropsWithChildren<SurfaceProps>) => {
  const [{ surfaceShadow, surfaceBorderRadius }] = useSettings()

  return (
    <Container
      shadow={surfaceShadow?.shadow}
      borderRadius={surfaceBorderRadius}
      {...delegated}
    />
  )
}
