import { createStorageContext } from "@startpage/local-storage"

import { initialGeneralSettings } from "./initialData"

export const {
  StorageProvider: GeneralSettingsProvider,
  useStorage: useGeneralSettings,
} = createStorageContext("general", initialGeneralSettings)
