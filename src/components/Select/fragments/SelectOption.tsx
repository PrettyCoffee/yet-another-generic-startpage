import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Listbox } from "@headlessui/react"

import { useFontSize } from "../../../Providers"

const StyledOption = styled.span(({ theme: { color, space } }) => {
  const fontSize = useFontSize()
  return css`
    > li {
      font-size: calc(${fontSize} * ${space.medium});
      list-style: none;
      cursor: pointer;
      padding: calc(${space.smallest} * 2);
      overflow-x: hidden;
      text-overflow: ellipsis;

      &.selected {
        color: ${color.primary.fg};
      }
      &.active {
        background-color: ${color.bg.highlight};
      }
    }
  `
})

type GetClassesArgs = {
  active: boolean
  selected: boolean
}
const getOptionClasses = ({ active, selected }: GetClassesArgs) => {
  const classes: string[] = []
  if (active) classes.push("active")
  if (selected) classes.push("selected")
  return classes.join(" ")
}

export type Option = {
  value: string
  label?: string
}

export const SelectOption = ({ value, label }: Option) => (
  <StyledOption>
    <Listbox.Option value={value} className={getOptionClasses}>
      {label}
    </Listbox.Option>
  </StyledOption>
)
