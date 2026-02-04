import styled from "@emotion/styled"

import { useGeneralSettings } from "../Providers"

const fallbackImage = "https://http.cat/404"

const Img = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
`

export const Image = () => {
  const [{ img, displayImg }] = useGeneralSettings()

  if (!displayImg) return null

  return (
    <Img
      alt=""
      src={img}
      onError={({ currentTarget }) => (currentTarget.src = fallbackImage)}
    />
  )
}
