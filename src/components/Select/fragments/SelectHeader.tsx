import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Listbox } from "@headlessui/react"
import { ChevronDown, ChevronUp } from "react-feather"

const HeaderButton = styled(Listbox.Button)<Pick<SelectHeaderProps, "open">>`
  ${({ theme: { space, color }, open }) => css`
    height: calc(${space.medium} * 2);
    padding: 0 ${space.small};
    width: 100%;

    display: inline-flex;
    align-items: center;

    cursor: pointer;
    color: inherit;
    background-color: transparent;

    outline: none;
    border: none;
    border: ${color.fg.base} solid ${space.smallest};

    > svg {
      height: 1.2rem;
    }

    :hover {
      background-color: ${color.bg.highlight};
    }
    :focus-visible {
      background: ${color.bg.highlight};
      border-color: ${color.primary.base};
    }
    ${open &&
    css`
      border-color: ${color.primary.base};
    `}
  `}
`

const HeaderText = styled.span`
  ${({ theme: { color, space }, placeholder }) => css`
    font-size: ${space.medium};
    flex: 1;
    text-align: left;
    overflow-x: hidden;
    text-overflow: ellipsis;

    ${Boolean(placeholder) &&
    css`
      color: ${color.fg.shade};
    `}
  `}
`

export type SelectHeaderProps = {
  label?: string
  open: boolean
}

export const SelectHeader = ({ label, open }: SelectHeaderProps) => (
  <HeaderButton open={open}>
    <HeaderText>{label}</HeaderText>
    {open ? <ChevronUp /> : <ChevronDown />}
  </HeaderButton>
)
