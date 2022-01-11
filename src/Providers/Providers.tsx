import { PropsWithChildren } from "react"

import { BookmarkProvider } from "@startpage/bookmarks"
import { StoragePrefixProvider } from "@startpage/local-storage"

import { GeneralSettingsProvider } from "./GeneralSettings"
import { initialBookmarks } from "./initialData"
import { SearchSettingsProvider } from "./SearchSettings"
import { SurfaceSettingsProvider } from "./SurfaceSettings"
import { ThemeProvider } from "./ThemeProvider"

export const Providers = ({ children }: PropsWithChildren<unknown>) => (
  <StoragePrefixProvider prefix="gnrc-">
    <ThemeProvider>
      <BookmarkProvider initialBookmarks={initialBookmarks}>
        <GeneralSettingsProvider>
          <SearchSettingsProvider>
            <SurfaceSettingsProvider>{children}</SurfaceSettingsProvider>
          </SearchSettingsProvider>
        </GeneralSettingsProvider>
      </BookmarkProvider>
    </ThemeProvider>
  </StoragePrefixProvider>
)
