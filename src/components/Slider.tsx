import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Theme } from "@startpage/theming"

import { useFontSize } from "../Providers"
import { Label } from "./Label"

const trackStyles = ({ color, space }: Theme) => css`
  background: ${color.fg.shade};
  height: ${space.smallest};
  border-radius: 2px;
`

const thumbStyles = ({ color, space }: Theme) => css`
  appearance: none;
  height: ${space.medium};
  width: ${space.medium};
  background: ${color.bg.surface};
  outline: 2px solid ${color.fg.surface};
  margin-top: -0.4rem;
  border-radius: 50%;
  border: none;
`

const trackFocusStyles = ({ color }: Theme) =>
  css`
    background-color: ${color.primary.fg};
  `

const thumbFocusStyles = ({ color }: Theme) => css`
  outline: 2px solid ${color.primary.base};
  background: ${color.bg.highlight};
`

const Wrapper = styled.div`
  ${({ theme: { space } }) => css`
    display: inline-block;
    width: 10rem;
    margin: ${space.medium};
  `}
`

const ValueText = styled.div(() => {
  const fontSize = useFontSize()
  return css`
    text-align: center;
    font-size: calc(${fontSize} * 0.75rem);
  `
})

const SliderInput = styled.input`
  ${({ theme }) => css`
    appearance: none;
    display: inline-block;
    background: transparent;
    width: 100%;
    cursor: pointer;
    height: 1.5rem;

    /** Love you Firefox */
    ::-moz-range-track {
      ${trackStyles(theme)}
    }
    ::-moz-range-thumb {
      ${thumbStyles(theme)}
    }
    :focus-visible,
    :active {
      ::-moz-range-track {
        ${trackFocusStyles(theme)}
      }
      ::-moz-range-thumb {
        ${thumbFocusStyles(theme)}
      }
    }

    /** because FUCK Chrome, thats why */
    input[type="range"]& {
      ::-webkit-slider-runnable-track {
        ${trackStyles(theme)}
      }
      ::-webkit-slider-thumb {
        ${thumbStyles(theme)}
      }
      :focus-visible,
      :active {
        outline: none;
        ::-webkit-slider-runnable-track {
          ${trackFocusStyles(theme)}
        }
        ::-webkit-slider-thumb {
          ${thumbFocusStyles(theme)}
        }
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
      <ValueText aria-hidden>{getValueText(value)}</ValueText>
    </Label>
  </Wrapper>
)
