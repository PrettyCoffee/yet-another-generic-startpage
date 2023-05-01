import { PropsWithChildren } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps,
} from "react-error-boundary"

import { useFontSize } from "./Providers/GeneralSettings"
import { storagePrefix } from "./Providers/Providers"

const Wrapper = styled.div`
  width: 100vw;
  font-family: sans-serif;
`
const Description = styled.div(() => {
  const fontSize = useFontSize()
  return css`
    font-size: calc(${fontSize} * 1.1rem);
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `
})
const Button = styled.button`
  margin: 0.5rem;
`
const Error = styled.blockquote`
  padding: 1rem;
  border: red 2px solid;
`

const prefixedKeys = Object.keys(localStorage).filter(key =>
  key.startsWith(storagePrefix)
)

const getLSContent = () => {
  const result: Record<string, unknown> = {}
  prefixedKeys.map(key => {
    try {
      result[key] = JSON.parse(localStorage[key])
    } catch {
      result[key] = "PARSING ERROR: This item seems to be broken"
    }
  })
  return result
}

const DeleteButtons = () => {
  const deleteKey = (key: string) => {
    delete localStorage[key]
    location.reload()
  }

  const resetLocalStorage = () => {
    localStorage.clear()
    location.reload()
  }
  return (
    <>
      <div>
        {prefixedKeys.map(key => (
          <Button onClick={() => deleteKey(key)}>Delete {key}</Button>
        ))}
      </div>
      <Button onClick={resetLocalStorage}>Reset startpage entirely</Button>
    </>
  )
}

const ErrorFallback = ({ error }: FallbackProps) => (
  <Wrapper>
    <Description>
      <h1>Oopsie!</h1>
      <Error>
        {error.name}: {error.message}
      </Error>
      <p>
        Seems like something is broken :(
        <br />
        You can try fixing this by clearing your settings and reloading the
        page.
        <br />
        <strong>But be aware that this will delete your settings!!!</strong>
      </p>
      <p>Use these Buttons to delete broken localstorage items.</p>
      <DeleteButtons />
    </Description>
    <strong>
      This is your localstorage, maybe you want to back it up or use it for
      diagnostics?
    </strong>
    <pre>{JSON.stringify(getLSContent(), null, 2)}</pre>
  </Wrapper>
)

export const ErrorBoundary = ({ children }: PropsWithChildren<unknown>) => (
  <ReactErrorBoundary FallbackComponent={ErrorFallback}>
    {children}
  </ReactErrorBoundary>
)
