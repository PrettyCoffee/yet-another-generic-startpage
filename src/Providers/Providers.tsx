import { PropsWithChildren } from "react"

import { BookmarkProvider } from "@startpage/bookmarks"
import { StoragePrefixProvider } from "@startpage/local-storage"

import { initialBookmarks } from "./initialData"
import { SettingsProvider } from "./SettingsProvider"
import { ThemeProvider } from "./ThemeProvider"

export const Providers = ({ children }: PropsWithChildren<unknown>) => (
  <StoragePrefixProvider prefix="gnrc-">
    <ThemeProvider>
      <BookmarkProvider initialBookmarks={initialBookmarks}>
        <SettingsProvider>{children}</SettingsProvider>
      </BookmarkProvider>
    </ThemeProvider>
  </StoragePrefixProvider>
)
