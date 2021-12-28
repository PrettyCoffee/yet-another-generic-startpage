import { useState } from "react"

import { TextInput } from "./TextInput"

const isImage = (url: string, timeout = 5000): Promise<boolean> =>
  new Promise((resolve, reject) => {
    const image = new Image()

    const timer = setTimeout(() => {
      reject(false)
    }, timeout)

    const errorHandler = () => {
      clearTimeout(timer)
      reject(false)
    }

    image.onerror = image.onabort = errorHandler

    image.onload = () => {
      clearTimeout(timer)
      resolve(true)
    }

    image.src = url
  })

type ImageInputProps = {
  label: string
  value: string
  onChange: (value: string) => void
}

export const ImageInput = ({
  label,
  value: img,
  onChange,
}: ImageInputProps) => {
  const [value, setValue] = useState(img)
  const [isValid, setIsValid] = useState(true)

  const handleChange = (value: string) => {
    setValue(value)
    isImage(value)
      .then(() => {
        setIsValid(true)
        onChange(value)
      })
      .catch(setIsValid)
  }

  return (
    <TextInput
      label={label}
      value={value}
      onChange={handleChange}
      invalid={!isValid}
    />
  )
}
