import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Edit3, Trash } from "react-feather"

import { IconButton } from "../../"
import { RowElement } from "../EditableRow"
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

type ItemViewModeProps = RowElement & {
  designator: string
  onEditClick: () => void
  onRemoveClick: () => void
}

export const ItemViewMode = ({
  label,
  url,
  designator,
  onRemoveClick,
  onEditClick,
}: ItemViewModeProps) => (
  <Wrapper>
    <Label>{label}</Label>
    <Url url={url} />
    <Actions>
      <IconButton
        icon={Edit3}
        label={`Edit ${label} ${designator}`}
        onClick={onEditClick}
      />
      <IconButton
        icon={Trash}
        label={`Remove ${label} ${designator}`}
        onClick={onRemoveClick}
      />
    </Actions>
  </Wrapper>
)
