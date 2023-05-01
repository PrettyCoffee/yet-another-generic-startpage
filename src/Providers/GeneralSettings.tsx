import { createStorageContext } from "@startpage/local-storage"

import { initialGeneralSettings } from "./initialData"

export const {
  StorageProvider: GeneralSettingsProvider,
  useStorage: useGeneralSettings,
} = createStorageContext("general", initialGeneralSettings)

export const useFontSize = () => {
  const [{ fontSize }] = useGeneralSettings()
  return fontSize ?? initialGeneralSettings.fontSize
}
