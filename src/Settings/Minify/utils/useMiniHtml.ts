import { useGeneralSettings, useSearchSettings } from "../../../Providers"
import { getMiniYagsFile } from "./getMiniYagsFile"
import { replacePlaceholders } from "./replacePlaceholders"

const getRawHtml = () => getMiniYagsFile("index.html")

export const useMiniHtml = () => {
  const [{ img, title }] = useGeneralSettings()
  const [{ placeholder }] = useSearchSettings()

  const rawHtml = getRawHtml()

  return replacePlaceholders(rawHtml, {
    image: img,
    title: title,
    placeholder: placeholder,
  })
}
