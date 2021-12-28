import { useEffect, useState } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import Color from "color"

import { TextInput } from "./TextInput"

const Wrapper = styled.div<{ color: string }>`
  ${({ theme: { space }, color }) => css`
    display: inline-block;
    margin: 1rem 1rem;
    width: 10rem;

    > label > span::before {
      content: "";
      display: inline-block;
      margin-right: ${space.small};

      background-color: ${color};
      width: ${space.small};
      height: ${space.small};

      border: 1px solid white;
    }
  `}
`

type ColorInputProps = {
  label: string
  value: string
  onChange: (value: string) => void
}

const isColor = (value: string) => {
  try {
    Color(value)
    return true
  } catch {
    return false
  }
}

export const ColorInput = ({ label, value, onChange }: ColorInputProps) => {
  const [color, setColor] = useState(value)

  const handleChange = (value: string) => {
    setColor(value)
    if (isColor(value)) onChange(value)
  }

  useEffect(() => setColor(value), [value])

  return (
    <Wrapper color={color}>
      <TextInput
        label={label}
        value={color}
        onChange={handleChange}
        invalid={color !== value}
      />
    </Wrapper>
  )
}
