import { useGeneralSettings, useSearchSettings } from "../../../Providers"
import { replacePlaceholders } from "./replacePlaceholders"
import { rawHtml } from "./rawFiles"

export const useMiniHtml = () => {
  const [{ img, title }] = useGeneralSettings()
  const [{ placeholder }] = useSearchSettings()

  return replacePlaceholders(rawHtml, {
    image: img,
    title: title,
    placeholder: placeholder,
  })
}
