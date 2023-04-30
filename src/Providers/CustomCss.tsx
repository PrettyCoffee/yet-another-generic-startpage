import { createStorageContext } from "@startpage/local-storage"

import { initialCustomCss } from "./initialData"

export const { StorageProvider: CustomCssProvider, useStorage: useCustomCss } =
  createStorageContext("custom-css", initialCustomCss)
