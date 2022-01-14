import { createStorageContext } from "@startpage/local-storage"

import { initialSurfaceSettings } from "./initialData"

export const {
  StorageProvider: SurfaceSettingsProvider,
  useStorage: useSurfaceSettings,
} = createStorageContext("surface", initialSurfaceSettings)
