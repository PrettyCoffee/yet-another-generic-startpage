import { createStorageContext } from "@startpage/local-storage"

import { surfaceSettings } from "./initialData"

export const {
  StorageProvider: SurfaceSettingsProvider,
  useStorage: useSurfaceSettings,
} = createStorageContext("surface", surfaceSettings)
