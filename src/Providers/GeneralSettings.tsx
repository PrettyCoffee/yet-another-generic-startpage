import { createStorageContext } from "@startpage/local-storage"

import { generalSettings } from "./initialData"

export const {
  StorageProvider: GeneralSettingsProvider,
  useStorage: useGeneralSettings,
} = createStorageContext("general", generalSettings)
