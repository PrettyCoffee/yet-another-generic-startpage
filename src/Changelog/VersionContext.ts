import { createStorageContext } from "@startpage/local-storage"

import { firstVersion } from "./data"

export const { StorageProvider: VersionProvider, useStorage: useVersion } =
  createStorageContext("version", firstVersion)
