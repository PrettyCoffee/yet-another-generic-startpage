import { useState } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Bookmark } from "@startpage/bookmarks"
import { Save, X } from "react-feather"

import { IconButton, TextInput } from "../../../../components"

const Wrapper = styled.div`
  ${({ theme: { space, color } }) => css`
    height: auto;
    padding: ${space.large};
    margin: ${space.large};

    display: flex;
    gap: ${space.medium};
    flex-direction: column;

    border: 2px solid ${color.bg.shade};
  `}
`

type ItemEditModeProps = Bookmark & {
  onSave: (bookmark: Bookmark) => void
  onAbort: () => void
}

export const ItemEditMode = ({
  label,
  url,
  onSave,
  onAbort,
}: ItemEditModeProps) => {
  const [newLabel, setNewLabel] = useState(label)
  const [newUrl, setNewUrl] = useState(url)

  const newBookmark: Bookmark = {
    label: newLabel,
    url: newUrl,
  }

  return (
    <Wrapper>
      <TextInput label="Label" value={newLabel} onChange={setNewLabel} />
      <TextInput label="Url" value={newUrl} onChange={setNewUrl} />
      <div>
        <IconButton
          icon={Save}
          label="Save changes"
          onClick={() => onSave(newBookmark)}
        />
        <IconButton icon={X} label="Discard changes" onClick={onAbort} />
      </div>
    </Wrapper>
  )
}
