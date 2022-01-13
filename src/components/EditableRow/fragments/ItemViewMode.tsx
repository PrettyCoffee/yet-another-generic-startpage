import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Edit3, Trash } from "react-feather"

import { IconButton } from "../../"
import { RowElement } from "../EditableRow"
import { RowText } from "./RowText"
import { Url } from "./Url"

const Wrapper = styled.div`
  ${({ theme: { space } }) => css`
    height: calc(${space.medium} * 2);
    width: 100%;

    display: flex;
    align-items: center;
    gap: ${space.medium};
  `}
`

const Label = styled(RowText)`
  width: 20%;
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
