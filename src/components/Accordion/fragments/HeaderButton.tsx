import { PropsWithChildren } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Disclosure } from "@headlessui/react"
import { ChevronDown, ChevronRight } from "react-feather"

import { useFontSize } from "../../../Providers"
type DivButtonProps = Pick<HeaderButtonProps, "label"> & {
  className?: string
}
const DivButton = ({
  label,
  ...delegated
}: PropsWithChildren<DivButtonProps>) => (
  <Disclosure.Button
    as="div"
    role="button"
    aria-label={`Expand ${label || "accordion"}`}
    tabIndex={0}
    {...delegated}
  />
)

const Button = styled(DivButton)(({ theme: { color, space } }) => {
  const fontSize = useFontSize()
  return css`
    font-size: ${fontSize}rem;
    width: 100%;
    height: 4rem;

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
  `
})

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
  label?: string
}

export const HeaderButton = ({
  open,
  label,
  children,
}: PropsWithChildren<HeaderButtonProps>) => {
  return (
    <Button label={label}>
      <CaretLayout>{open ? <ChevronDown /> : <ChevronRight />}</CaretLayout>
      {children}
    </Button>
  )
}
