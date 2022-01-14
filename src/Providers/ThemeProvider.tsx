import { PropsWithChildren } from "react"

import { css, Global, ThemeProvider as EmotionTheme } from "@emotion/react"
import { ThemeConsumer, ThemeProvider as StpgTheme } from "@startpage/theming"

import { initialTheme } from "./initialData"

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap");

  body {
    font-family: "Quicksand", sans-serif;
    min-height: 100vh;
    min-width: 600px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    margin: 0;
  }
  #root {
    overflow: hidden;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  a {
    text-decoration: none;
    color: inherit;
    :visited {
      color: inherit;
    }
  }
`

export const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => (
  <StpgTheme initialTheme={initialTheme} persistTheme={true}>
    <ThemeConsumer>
      {({ theme }) => (
        <EmotionTheme theme={theme}>
          <Global styles={globalStyles} />
          {children}
        </EmotionTheme>
      )}
    </ThemeConsumer>
  </StpgTheme>
)
