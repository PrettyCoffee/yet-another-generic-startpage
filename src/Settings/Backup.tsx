import { useState } from "react"

import styled from "@emotion/styled/macro"
import { storageBackup, useStoragePrefix } from "@startpage/local-storage"
import { Download } from "react-feather"

import { Button, Section, FileInput } from "../components"
import { Checkbox } from "../components/Checkbox"
import { CenterLayout } from "./Design/fragments/CenterLayout"

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const Backup = () => {
  const [useBookmarks, setUseBookmarks] = useState(true)
  const [useColors, setUseColors] = useState(true)
  const [useSettings, setUseSettings] = useState(true)
  const [importValid, setImportValid] = useState<boolean>()
  const prefix = useStoragePrefix()

  const keys = []
  if (useBookmarks) keys.push(prefix + "bookmarks")
  if (useColors) keys.push(prefix + "theme")
  if (useSettings) keys.push(prefix + "settings")

  const Backup = storageBackup(keys)

  const onImport = (file: File) => {
    Backup.restore(file).then(setImportValid)
    window.location.reload()
  }
  return (
    <Section title="Backup">
      <CenterLayout>
        <Checkbox
          label="Bookmarks"
          checked={useBookmarks}
          onChange={setUseBookmarks}
        />
        <Checkbox label="Colors" checked={useColors} onChange={setUseColors} />
        <Checkbox
          label="Miscellaneous"
          checked={useSettings}
          onChange={setUseSettings}
        />
      </CenterLayout>
      <br />
      <Layout>
        <FileInput
          label="Import"
          id="backup-import"
          valid={importValid}
          onChange={onImport}
        />
        <Button onClick={() => Backup.download()}>
          Download <Download />
        </Button>
      </Layout>
    </Section>
  )
}
