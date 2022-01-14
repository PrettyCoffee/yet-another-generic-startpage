import { useState } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { useStoragePrefix } from "@startpage/local-storage"

import { Button, Section, TextInput } from "../components"

type DangerFieldProps = {
  label: string
  expected: string
  onButtonClick: () => void
}

const Danger = styled.div`
  ${({ theme: { color, space } }) => css`
    margin: ${space.largest} auto;
    display: flex;
    align-items: flex-end;
    width: fit-content;
    padding: ${space.large};
    border: ${space.smallest} solid ${color.palette.red};
    > * {
      display: inline-block;
    }
    > button {
      margin-left: ${space.large};
      min-width: max-content;
    }
  `}
`

const DangerField = ({ expected, label, onButtonClick }: DangerFieldProps) => {
  const [value, setValue] = useState("")
  const invalid = value !== expected

  const handleClick = () => {
    setValue("")
    onButtonClick()
  }

  return (
    <Danger>
      <TextInput
        label={`Type "${expected}" to confirm`}
        placeholder={expected}
        value={value}
        invalid={invalid}
        onChange={setValue}
      />
      <Button disabled={invalid} onClick={handleClick}>
        {label}
      </Button>
    </Danger>
  )
}

export const DangerZone = () => {
  const prefix = useStoragePrefix()

  const resetAll = () => {
    Object.keys(window.localStorage).forEach(key => {
      if (key.startsWith(prefix)) {
        delete window.localStorage[key]
      }
    })
    window.location.reload()
  }

  return (
    <Section title="Danger Zone">
      <DangerField
        expected="Reset all my settings"
        label="Reset settings"
        onButtonClick={resetAll}
      />
    </Section>
  )
}
