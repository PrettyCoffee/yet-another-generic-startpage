import { useEffect, useState } from "react"

import styled from "@emotion/styled/macro"

import { useGeneralSettings } from "../Providers"

const fallbackImage = "https://http.cat/404"

const Img = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
`

export const Image = () => {
  const [{ img }] = useGeneralSettings()
  const [src, setSrc] = useState("")

  useEffect(() => setSrc(img), [img])

  return <Img alt="" src={src} onError={() => setSrc(fallbackImage)} />
}
