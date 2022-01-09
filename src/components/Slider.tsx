import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { Label } from "./Label"

const Wrapper = styled.div`
  ${({ theme: { space } }) => css`
    display: inline-block;
    width: 10rem;
    margin: ${space.medium};
  `}
`

const ValueText = styled.div`
  text-align: center;
  font-size: 0.75rem;
`

const SliderInput = styled.input`
  ${({ theme: { color, space } }) => css`
    display: inline-block;
    background-color: transparent;
    width: 100%;

    &::-webkit-slider-runnable-track,
    &::-moz-range-track {
      background: ${color.fg.shade};
      height: ${space.smallest};
      border-radius: 2px;
    }

    &::-webkit-slider-thumb,
    &::-moz-range-thumb {
      height: ${space.medium};
      width: ${space.medium};
      background: ${color.bg.surface};
      outline: 2px solid ${color.fg.surface};
      margin-top: -5px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
    }

    &:focus-visible {
      outline: none;
      &::-webkit-slider-runnable-track,
      &::-moz-range-track {
        background-color: ${color.primary.fg};
      }
      &::-webkit-slider-thumb,
      &::-moz-range-thumb {
        outline: 2px solid ${color.primary.base};
      }
    }
  `}
`

type SliderProps = {
  label: string
  value: number
  getValueText?: (value: number) => string
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
}

export const Slider = ({
  label,
  value,
  onChange,
  getValueText = String,
  ...delegated
}: SliderProps) => (
  <Wrapper>
    <Label label={label}>
      <SliderInput
        type="range"
        value={value}
        onChange={event => onChange?.(Number(event.target.value))}
        {...delegated}
      />
      <ValueText>{getValueText(value)}</ValueText>
    </Label>
  </Wrapper>
)
