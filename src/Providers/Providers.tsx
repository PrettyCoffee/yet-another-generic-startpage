import { PropsWithChildren } from "react"

import { BookmarkProvider } from "@startpage/bookmarks"
import { StoragePrefixProvider } from "@startpage/local-storage"

import { CustomCssProvider } from "./CustomCss"
import { GeneralSettingsProvider } from "./GeneralSettings"
import { initialBookmarks } from "./initialData"
import { SearchSettingsProvider } from "./SearchSettings"
import { SurfaceSettingsProvider } from "./SurfaceSettings"
import { ThemeProvider } from "./ThemeProvider"
import { VersionProvider } from "../Changelog/VersionContext"

export const storagePrefix = "yags-"

export const Providers = ({ children }: PropsWithChildren) => (
  <StoragePrefixProvider prefix={storagePrefix}>
    <BookmarkProvider initialBookmarks={initialBookmarks}>
      <VersionProvider>
        <GeneralSettingsProvider>
          <CustomCssProvider>
            <SearchSettingsProvider>
              <SurfaceSettingsProvider>
                {/* eslint-disable-next-line react/jsx-max-depth */}
                <ThemeProvider>{children}</ThemeProvider>
              </SurfaceSettingsProvider>
            </SearchSettingsProvider>
          </CustomCssProvider>
        </GeneralSettingsProvider>
      </VersionProvider>
    </BookmarkProvider>
  </StoragePrefixProvider>
)
