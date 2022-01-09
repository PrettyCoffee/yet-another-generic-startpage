import { useState } from "react"

import styled from "@emotion/styled/macro"
import { storageBackup, useStoragePrefix } from "@startpage/local-storage"
import { Download } from "react-feather"

import { Button, Section, FileInput } from "../components"

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const Backup = () => {
  const [importValid, setImportValid] = useState<boolean>()
  const prefix = useStoragePrefix()
  const keys = Object.keys(localStorage).filter(key => key.startsWith(prefix))
  const Backup = storageBackup(keys)

  const onImport = (file: File) => {
    Backup.restore(file).then(setImportValid)
    window.location.reload()
  }
  return (
    <Section title="Backup">
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
