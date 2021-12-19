import { PropsWithChildren } from "react"

import { css, Global, ThemeProvider as EmotionTheme } from "@emotion/react"
import { getTheme } from "@startpage/preset"
import { ThemeConsumer, ThemeProvider } from "@startpage/theming"

const globalStyles = css`
  body {
    font-family: sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: 0;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`

export const Providers = ({ children }: PropsWithChildren<unknown>) => (
  <ThemeProvider initialTheme={getTheme("nord")}>
    <ThemeConsumer>
      {({ theme }) => (
        <EmotionTheme theme={theme}>
          <Global styles={globalStyles} />
          {children}
        </EmotionTheme>
      )}
    </ThemeConsumer>
  </ThemeProvider>
)
