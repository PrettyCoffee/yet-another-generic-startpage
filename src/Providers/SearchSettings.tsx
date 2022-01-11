import { createStorageContext } from "@startpage/local-storage"

import { searchSettings } from "./initialData"

export const {
  StorageProvider: SearchSettingsProvider,
  useStorage: useSearchSettings,
} = createStorageContext("search", searchSettings)
