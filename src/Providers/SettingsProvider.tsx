import { createStorageContext } from "@startpage/local-storage"

import { defaultSettings } from "./initialData"

export const { StorageProvider: SettingsProvider, useStorage: useSettings } =
  createStorageContext("settings", defaultSettings)
