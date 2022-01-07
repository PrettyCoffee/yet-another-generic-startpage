import styled from "@emotion/styled/macro"
import { Plus, Edit3, Trash } from "react-feather"

import { IconButton } from "../../../../components"
import { GroupTitleProps } from "./GroupTitle"
import { TitleLayout } from "./TitleLayout"

const GroupName = styled.h3`
  margin: 0;
`

type ViewModeProps = Pick<GroupTitleProps, "label" | "bookmarkCount"> & {
  onRemove: () => void
  onEdit: () => void
  addBookmark: () => void
}

export const ViewMode = ({
  label,
  addBookmark,
  onRemove,
  onEdit,
  bookmarkCount,
}: ViewModeProps) => (
  <TitleLayout>
    <GroupName>{label}</GroupName>
    <div>
      <IconButton
        icon={Plus}
        label={`Add new bookmark to ${label}`}
        onClick={addBookmark}
        disabled={bookmarkCount >= 4}
      />
      <IconButton icon={Edit3} label={`Edit group ${label}`} onClick={onEdit} />
      <IconButton
        icon={Trash}
        label={`Remove group ${label}`}
        onClick={onRemove}
      />
    </div>
  </TitleLayout>
)
