import { createStorageContext } from "@startpage/local-storage"

import { initialSearchSettings } from "./initialData"

export const {
  StorageProvider: SearchSettingsProvider,
  useStorage: useSearchSettings,
} = createStorageContext("search", initialSearchSettings)
