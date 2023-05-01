import JSZip from "jszip"

import { Button, Section } from "../../components"
import { useCustomCss } from "../../Providers/CustomCss"
import { Note } from "../fragments/Note"
import {
  getMiniYagsFile,
  useMiniCssVars,
  useMiniHtml,
  useMiniJs,
  downloadBlob,
} from "./utils"

export const Minify = () => {
  const [customCss] = useCustomCss()
  const miniHtml = useMiniHtml()
  const miniJs = useMiniJs()
  const miniCssVars = useMiniCssVars()
  const miniStyles = getMiniYagsFile("styles.css")
  const miniFavicon = getMiniYagsFile("favicon.ico")

  const download = () => {
    const zip = new JSZip()
    zip.file("index.html", miniHtml)
    zip.file("scripts.js", miniJs)
    zip.file("variables.css", miniCssVars)
    zip.file("custom-styles.css", customCss)
    zip.file("styles.css", miniStyles)
    zip.file("favicon.ico", miniFavicon)

    zip
      .generateAsync({ type: "blob" })
      .then(blob => downloadBlob(URL.createObjectURL(blob), "mini-yags.zip"))
  }

  return (
    <Section title="Mini-YAGS">
      You can extract your startpage design into static files for local use.
      This reduces the complete size from ~450kb to ~10kb.
      <br />
      <br />
      But there are some differences:
      <ul>
        <li>Your settings will be written into the files</li>
        <li>
          No settings view anymore. (Change the code yourself or download again
          for changes)
        </li>
        <li>Fonts are not fetched from google</li>
      </ul>
      Use this if you have a bad internet connection, want to edit the code or
      just want to have it locally.
      <br />
      <br />
      <Button onClick={download}>Zip me a copy!</Button>
      <Note>
        Your custom styles may break due to major differences in the HTML
        structure. That being said, they are included in the
        <mark> "custom-styles.css" </mark>
        file and should be fixable by adapting the <mark>css selectors</mark>.
      </Note>
    </Section>
  )
}
