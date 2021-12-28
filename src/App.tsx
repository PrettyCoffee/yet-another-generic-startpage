import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { ContentSwitch } from "./components"
import { Settings } from "./Settings/Settings"
import { Startpage } from "./Startpage/Startpage"

const Layout = styled.div`
  ${({ theme: { color } }) => css`
    position: relative;
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${color.bg.base};
  `}
`

const App = () => {
  return (
    <Layout>
      <ContentSwitch leftContent={Startpage} rightContent={Settings} />
    </Layout>
  )
}

export default App
