import { css } from "@emotion/react"
import styled from "@emotion/styled"

import logo from "./logo.svg"
import { Providers } from "./Providers"

const Wrapper = styled.div`
  text-align: center;
`

const Header = styled.header`
  ${({ theme: { space, color } }) => css`
    background-color: ${color.bg.base};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: ${space.large};
    color: ${color.fg.base};
  `}
`

const Logo = styled.img`
  max-width: 20rem;
  pointer-events: none;
  animation: App-logo-spin infinite 20s linear;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Link = styled.a`
  color: ${({ theme: { color } }) => color.primary.fg};
`

function App() {
  return (
    <Providers>
      <Wrapper>
        <Header>
          <Logo src={logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Link
            href="https://prettycoffee.github.io/startpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the docs
          </Link>
        </Header>
      </Wrapper>
    </Providers>
  )
}

export default App
