import { rawHtml } from "./rawFiles"
import { replacePlaceholders } from "./replacePlaceholders"
import { useGeneralSettings, useSearchSettings } from "../../../Providers"

export const useMiniHtml = () => {
  const [{ img, title }] = useGeneralSettings()
  const [{ placeholder }] = useSearchSettings()

  return replacePlaceholders(rawHtml, {
    image: img,
    title: title,
    placeholder: placeholder,
  })
}
