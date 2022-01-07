import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Bookmark } from "@startpage/bookmarks"
import { Edit3, Trash } from "react-feather"

import { IconButton } from "../../../../components"
import { Url } from "./Url"

const Wrapper = styled.div`
  ${({ theme: { space } }) => css`
    height: calc(${space.medium} * 2);
    width: 100%;

    display: flex;
    gap: ${space.medium};
  `}
`

const Label = styled.div`
  width: 20%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Actions = styled.div`
  width: max-content;
`

type ItemViewModeProps = Pick<Bookmark, "label" | "url"> & {
  onEdit: () => void
  onRemove: () => void
}

export const ItemViewMode = ({
  label,
  url,
  onRemove,
  onEdit,
}: ItemViewModeProps) => (
  <Wrapper>
    <Label>{label}</Label>
    <Url url={url} />
    <Actions>
      <IconButton
        icon={Edit3}
        label={`Edit bookmark ${label}`}
        onClick={onEdit}
      />
      <IconButton
        icon={Trash}
        label={`Remove bookmark ${label}`}
        onClick={onRemove}
      />
    </Actions>
  </Wrapper>
)
