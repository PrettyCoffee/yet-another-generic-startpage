import { useMemo, useState } from "react"

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
  const [importValid, setImportValid] = useState<boolean>()
  const [checkState, setCheckState] = useState<Record<string, boolean>>({
    general: true,
    theme: true,
    surface: true,
    bookmarks: true,
  })
  const prefix = useStoragePrefix()

  const Backup = useMemo(
    () =>
      storageBackup(
        Object.keys(checkState)
          .filter(key => checkState[key])
          .map(key => prefix + key)
      ),
    [checkState, prefix]
  )

  const onImport = (file: File) => {
    Backup.restore(file).then(valid => {
      if (valid) window.location.reload()
      else setImportValid(false)
    })
  }

  const checkGeneral = (general: boolean) =>
    setCheckState({ ...checkState, general })

  const checkTheme = (theme: boolean) => setCheckState({ ...checkState, theme })

  const checkSurface = (surface: boolean) =>
    setCheckState({ ...checkState, surface })

  const checkBookmarks = (bookmarks: boolean) =>
    setCheckState({ ...checkState, bookmarks })

  return (
    <Section title="Backup">
      <CenterLayout>
        <Checkbox
          label="General"
          checked={checkState.general}
          onChange={checkGeneral}
        />
        <Checkbox
          label="Theme"
          checked={checkState.theme}
          onChange={checkTheme}
        />
        <Checkbox
          label="Window"
          checked={checkState.surface}
          onChange={checkSurface}
        />
        <Checkbox
          label="Bookmarks"
          checked={checkState.bookmarks}
          onChange={checkBookmarks}
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
