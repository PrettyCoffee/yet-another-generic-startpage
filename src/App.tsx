import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { Changelog } from "./Changelog/Changelog"
import { latestVersion } from "./Changelog/data"
import { useVersion } from "./Changelog/VersionContext"
import { ContentSwitch, HashRouter, HashRoutes } from "./components"
import { useUrlHash } from "./components/HashRouter/utils/useUrlHash"
import { Settings } from "./Settings/Settings"
import { Startpage } from "./Startpage/Startpage"

const Link = styled.a`
  ${({ theme: { space, color } }) => css`
    color: ${color.fg.base};
    position: fixed;
    bottom: ${space.small};
    right: ${space.small};
    :hover {
      color: ${color.primary.fg};
    }
  `}
`

const Layout = styled.div`
  ${({ theme: { color } }) => css`
    position: relative;
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${color.bg.base};
    color: ${color.fg.base};
  `}
`

const changelogHash = "#changelog"

const StartpageContent = () => (
  <ContentSwitch leftContent={<Startpage />} rightContent={<Settings />} />
)

const routes: HashRoutes = {
  "#changelog": Changelog,
}

const App = () => {
  const [version, setVersion] = useVersion()
  const urlHash = useUrlHash()

  if (version !== latestVersion) {
    setVersion(latestVersion)
    window.location.hash = changelogHash
  }

  const showChangelog = urlHash === changelogHash
  const linkProps = {
    href: showChangelog ? "#" : changelogHash,
    children: showChangelog ? "Startpage" : "Changelog",
  }

  return (
    <Layout>
      <HashRouter defaultContent={StartpageContent} routes={routes} />
      <Link {...linkProps} />
    </Layout>
  )
}

export default App
