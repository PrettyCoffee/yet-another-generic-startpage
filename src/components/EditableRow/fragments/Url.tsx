import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

const getUrl = (url: string) => {
  try {
    return new URL(url)
  } catch {
    return {
      host: url,
      pathname: "",
      search: "",
    }
  }
}
const getUrlHost = (url: string) => getUrl(url).host.replace(/^www\./, "")
const getUrlPath = (url: string) => {
  const Url = getUrl(url)
  return Url.pathname + Url.search
}

const UrlWrapper = styled.div`
  flex: 1;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const UrlHost = styled.span`
  ${({ theme: { color } }) => css`
    color: ${color.fg.surface};
  `}
`
const UrlPath = styled.span`
  ${({ theme: { color } }) => css`
    color: ${color.fg.shade};
  `}
`

type UrlProps = {
  url: string
}

export const Url = ({ url }: UrlProps) => (
  <UrlWrapper>
    <UrlHost>{getUrlHost(url)}</UrlHost>
    <UrlPath>{getUrlPath(url)}</UrlPath>
  </UrlWrapper>
)
