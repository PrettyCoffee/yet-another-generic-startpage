import { useState } from "react"

import styled from "@emotion/styled/macro"
import { storageBackup } from "@startpage/local-storage"
import { Download } from "react-feather"

import { Button, Section, FileInput } from "../components"

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const Backup = () => {
  const [importValid, setImportValid] = useState<boolean>()
  const Backup = storageBackup()

  const onImport = (file: File) => {
    Backup.restore(file).then(setImportValid)
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
