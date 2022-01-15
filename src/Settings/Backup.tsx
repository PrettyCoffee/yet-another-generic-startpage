import { useMemo, useState } from "react"

import { storageBackup, useStoragePrefix } from "@startpage/local-storage"
import { Download } from "react-feather"

import { Button, Section, FileInput } from "../components"
import { Checkbox } from "../components/Checkbox"
import { CenterLayout } from "./fragments/CenterLayout"
import { Note } from "./fragments/Note"
import { SpacedLayout } from "./fragments/SpacedLayout"

export const Backup = () => {
  const [importValid, setImportValid] = useState<boolean>()
  const [checkState, setCheckState] = useState<Record<string, boolean>>({
    general: true,
    search: true,
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

  const checkSearch = (search: boolean) =>
    setCheckState({ ...checkState, search })

  const checkTheme = (theme: boolean) => setCheckState({ ...checkState, theme })

  const checkSurface = (surface: boolean) =>
    setCheckState({ ...checkState, surface })

  const checkBookmarks = (bookmarks: boolean) =>
    setCheckState({ ...checkState, bookmarks })

  return (
    <Section title="Backup">
      <CenterLayout>
        <Checkbox
          label="Bookmarks"
          checked={checkState.bookmarks}
          onChange={checkBookmarks}
        />
        <Checkbox
          label="General"
          checked={checkState.general}
          onChange={checkGeneral}
        />
        <Checkbox
          label="Search"
          checked={checkState.search}
          onChange={checkSearch}
        />
        <Checkbox
          label="Surface"
          checked={checkState.surface}
          onChange={checkSurface}
        />
        <Checkbox
          label="Theme"
          checked={checkState.theme}
          onChange={checkTheme}
        />
      </CenterLayout>
      <br />
      <SpacedLayout>
        <FileInput
          label="Import"
          id="backup-import"
          valid={importValid}
          onChange={onImport}
        />
        <Button onClick={() => Backup.download()}>
          Download <Download />
        </Button>
      </SpacedLayout>
      <Note>Both, import and download, will only use the checked options!</Note>
    </Section>
  )
}
