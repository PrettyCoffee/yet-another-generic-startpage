import React from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Listbox } from "@headlessui/react"

import { SelectProps } from "../Select"
import { SelectOption } from "./SelectOption"

const StyledOptions = styled(Listbox.Options)`
  ${({ theme: { color, space } }) => css`
    position: absolute;
    width: 100%;
    padding: 0;
    margin: 0;
    color: ${color.fg.surface};
    background-color: ${color.bg.surface};
    outline: none;
    z-index: 10;
    box-shadow: 0 0 ${space.small} ${color.bg.shade};
  `}
`

type OptionsProps = Pick<SelectProps, "options">

export const SelectOptions = ({ options }: OptionsProps) => (
  <StyledOptions>
    {options.map(({ label, value }) => (
      <SelectOption key={value} value={value} label={label} />
    ))}
  </StyledOptions>
)
