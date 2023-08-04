import { Listbox } from "@headlessui/react"

import { Label } from "../Label"
import { SelectHeader, SelectOptions, Wrapper } from "./fragments"
import { Option } from "./fragments/SelectOption"

const getOptionByValue = (options: Option[], value?: string) =>
  options.find(option => option.value === value)

export type SelectProps = {
  options: Option[]
  value?: string
  placeholder?: string
  label?: string
  onChange: (value: string) => void
}

export const Select = ({
  value,
  placeholder,
  onChange,
  options,
  label,
}: SelectProps) => {
  const currentOption = getOptionByValue(options, value)

  return (
    <Wrapper>
      <Label label={label}>
        <Listbox value={currentOption?.value} onChange={onChange}>
          {({ open }) => (
            <>
              <SelectHeader
                placeholder={placeholder}
                label={currentOption?.label}
                open={open}
              />
              <SelectOptions options={options} />
            </>
          )}
        </Listbox>
      </Label>
    </Wrapper>
  )
}
