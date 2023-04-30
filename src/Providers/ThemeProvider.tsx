import { PropsWithChildren } from "react"

import { css, Global, ThemeProvider as EmotionTheme } from "@emotion/react"
import { ThemeConsumer, ThemeProvider as StpgTheme } from "@startpage/theming"

import { useCustomCss } from "./CustomCss"
import { useGeneralSettings } from "./GeneralSettings"
import { initialTheme } from "./initialData"

const getGlobalStyles = (font?: string, enableFonts?: boolean) => {
  const fontBaseUrl =
    "https://fonts.googleapis.com/css?family=" + font?.replace(" ", "+")

  return css`
    ${enableFonts &&
    css`
      @import url("${fontBaseUrl}");
      @import url("${fontBaseUrl}:500");
      @import url("${fontBaseUrl}:700");
    `}

    body {
      font-family: "${font}", sans-serif;
      font-weight: 500;
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
}

export const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [customCss] = useCustomCss()
  const [{ font, enableFonts }] = useGeneralSettings()
  const globalStyles = getGlobalStyles(font, enableFonts)

  return (
    <StpgTheme initialTheme={initialTheme} persistTheme={true}>
      <ThemeConsumer>
        {({ theme }) => (
          <EmotionTheme theme={theme}>
            <Global styles={globalStyles} />
            <Global styles={customCss} />
            {children}
          </EmotionTheme>
        )}
      </ThemeConsumer>
    </StpgTheme>
  )
}
