import { ChangeEvent } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Upload } from "react-feather"

import { VisuallyHidden } from "./VisuallyHidden"

const Wrapper = styled.div`
  display: inline-block;
`

const HiddenFileInput = styled(VisuallyHidden)<{ type: "file" }>``

const Label = styled.label<{ valid?: boolean }>`
  ${({ theme: { space, color }, valid }) => css`
    height: calc(${space.largest} * 2);
    width: 12rem;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${space.small};

    cursor: pointer;
    border: ${color.fg.base} dashed ${space.smallest};

    > svg {
      height: 1.2rem;
    }

    :hover {
      background-color: ${color.bg.highlight};
    }
    ${HiddenFileInput}:focus-visible + & {
      border-color: ${color.primary.base};
      background: ${color.bg.highlight};
    }
    ${valid === true &&
    css`
      border-color: ${color.palette.green};
    `}
    ${valid === false &&
    css`
      border-color: ${color.palette.red};
    `}
  `}
`

type FileInputProps = {
  label?: string
  id?: string
  valid?: boolean
  onChange?: (value: File) => void
}

export const FileInput = ({ label, id, onChange, valid }: FileInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) onChange?.(file)
  }
  return (
    <Wrapper>
      <HiddenFileInput as="input" type="file" id={id} onChange={handleChange} />
      <Label htmlFor={id} valid={valid}>
        {label} <Upload />
      </Label>
    </Wrapper>
  )
}
