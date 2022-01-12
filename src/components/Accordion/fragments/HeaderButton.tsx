import { PropsWithChildren } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Disclosure } from "@headlessui/react"
import { ChevronDown, ChevronRight } from "react-feather"

const Button = styled(Disclosure.Button)`
  ${({ theme: { color, space } }) => css`
    width: 100%;

    display: flex;
    align-items: center;

    cursor: pointer;
    border: none;
    background: transparent;
    color: inherit;

    :hover {
      background: ${color.bg.highlight};
    }

    :focus-visible {
      background: ${color.bg.highlight};
      outline: ${space.smallest} solid ${color.fg.shade};
    }
  `}
`

const CaretLayout = styled.span`
  ${({ theme: { space } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${space.largest};
  `}
`

type HeaderButtonProps = {
  open: boolean
}

export const HeaderButton = ({
  open,
  children,
}: PropsWithChildren<HeaderButtonProps>) => {
  return (
    <Button>
      <CaretLayout>{open ? <ChevronDown /> : <ChevronRight />}</CaretLayout>
      {children}
    </Button>
  )
}
