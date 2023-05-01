import { InitialBookmarkGroup } from "@startpage/bookmarks"
import { getTheme } from "@startpage/preset"
import { SearchEngineName, SearchOptions } from "@startpage/search"

import { ShadowOptions } from "../Settings/Surface/fragments/ShadowStyle"

export const initialCustomCss = `/* You can put any css in here. For example:
#root > div {
  background-color: #373e4d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23579190' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
*/
`

export const initialGeneralSettings = {
  img: "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2019/05/tumblr_p320aq1osj1vjxiz1o1_1280.gif?iv=344",
  title: "Yet another generic startpage",
  displayImg: true,
  font: "Quicksand",
  enableFonts: false,
  fontSize: 1,
}

export const initialTheme = getTheme("nord")

export const initialSearchSettings = {
  placeholder: "Search the web",
  engine: "google" as SearchEngineName,
  forwardingLookup: {
    "/": "/",
    deepl: "https://deepl.com/",
    reddit: "https://reddit.com/",
    maps: "https://maps.google.com/",
  } as SearchOptions["forwardingLookup"],
}

export const initialSurfaceSettings = {
  shadow: {
    amount: 5,
    blur: 0,
    offset: 12,
    shadow: "",
  } as ShadowOptions,
  borderRadius: 0,
  maxWidth: 1000,
}

export const initialBookmarks: InitialBookmarkGroup[] = [
  {
    label: "reddit",
    bookmarks: [
      {
        label: "r/startpages",
        url: "https://www.reddit.com/r/startpages/",
      },
      {
        label: "r/typescript",
        url: "https://www.reddit.com/r/typescript/",
      },
      {
        label: "r/reactjs",
        url: "https://www.reddit.com/r/reactjs/",
      },
    ],
  },
  {
    label: "design tools",
    bookmarks: [
      {
        label: "pixlrx",
        url: "https://pixlr.com/x/",
      },
      {
        label: "image enlarger",
        url: "https://bigjpg.com/en",
      },
      {
        label: "haikei",
        url: "https://app.haikei.app/",
      },
      {
        label: "css gradients",
        url: "https://larsenwork.com/easing-gradients/",
      },
    ],
  },
  {
    label: "worth reading",
    bookmarks: [
      {
        label: "happy hues",
        url: "https://www.happyhues.co/",
      },
      {
        label: "styled-components",
        url: "https://www.joshwcomeau.com/react/demystifying-styled-components/",
      },
      {
        label: "react docs",
        url: "https://reactjs.org/docs/getting-started.html",
      },
    ],
  },
  {
    label: "sources",
    bookmarks: [
      {
        label: "icons",
        url: "https://feathericons.com/",
      },
      {
        label: "gif",
        url: "https://designyoutrust.com/2019/05/the-chill-and-retro-motion-pixel-art-of-motocross-saito/",
      },
      {
        label: "@startpage",
        url: "https://prettycoffee.github.io/startpage",
      },
      {
        label: "author",
        url: "https://prettycoffee.github.io/",
      },
    ],
  },
]
