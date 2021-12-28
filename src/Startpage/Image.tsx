import { useEffect, useState } from "react"

import styled from "@emotion/styled/macro"

import { useSettings } from "../Providers"

const fallbackImage = "https://http.cat/404"

const Img = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
`

export const Image = () => {
  const [{ img }] = useSettings()
  const [src, setSrc] = useState("")

  useEffect(() => setSrc(img), [img])

  return <Img alt="" src={src} onError={() => setSrc(fallbackImage)} />
}
