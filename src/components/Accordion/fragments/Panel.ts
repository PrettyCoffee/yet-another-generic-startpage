import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Disclosure } from "@headlessui/react"

export const Panel = styled(Disclosure.Panel)`
  ${({ theme: { space } }) => css`
    padding: ${space.medium} 0 ${space.medium} ${space.largest};
  `}
`
