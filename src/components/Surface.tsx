import { PropsWithChildren } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { useFontSize, useSurfaceSettings } from "../Providers"

type ContainerProps = {
  shadow: string
  borderRadius: number
  maxWidth: number
}

export const Container = styled.div<ContainerProps>(
  ({ theme: { color, space }, shadow, borderRadius, maxWidth }) => {
    const fontSize = useFontSize()
    return css`
      font-size: ${fontSize}rem;
      width: calc(100% - 6rem);
      max-width: ${maxWidth}px;
      margin: 0 auto;

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
    `
  }
)

type SurfaceProps = {
  className?: string
}

export const Surface = ({ ...delegated }: PropsWithChildren<SurfaceProps>) => {
  const [{ shadow, ...settings }] = useSurfaceSettings()

  return (
    <Container
      tabIndex={-1}
      shadow={shadow.shadow}
      {...settings}
      {...delegated}
    />
  )
}
