import { ReactNode, useState } from "react"

import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { Transition } from "@headlessui/react"
import { ChevronsLeft, ChevronsRight } from "react-feather"

import { IconButton } from "./IconButton"

const SwitchTransition = styled(Transition)`
  position: absolute;
  width: 100%;

  &.transition {
    transition: transform 0.7s ease-in-out;
  }
  &.display {
    transform: translateX(0);
  }
  &.hideLeft {
    transform: translateX(-150vw);
  }
  &.hideRight {
    transform: translateX(150vw);
  }
`

const ButtonPosition = styled.div`
  ${({ theme: { space } }) => css`
    position: fixed;
    top: ${space.smallest};
    right: ${space.smallest};
    > button:hover,
    > button:focus-visible {
      > svg {
        transform: scale(1.3);
      }
    }
  `}
`

type SurfaceSwitchProps = {
  leftContent: ReactNode
  rightContent: ReactNode
}

export const ContentSwitch = ({
  leftContent,
  rightContent,
}: SurfaceSwitchProps) => {
  const [activeView, setActiveView] = useState<"left" | "right">("left")
  const toggleView = () =>
    setActiveView(activeView === "left" ? "right" : "left")

  const sharedProps = {
    leaveFrom: "display",
    enterTo: "display",
    enter: "transition",
    leave: "transition",
    unmount: false,
  }
  return (
    <>
      <ButtonPosition>
        <IconButton
          icon={activeView === "left" ? ChevronsLeft : ChevronsRight}
          onClick={toggleView}
          label="Switch view"
        />
      </ButtonPosition>
      <SwitchTransition
        leaveTo="hideLeft"
        enterFrom="hideLeft"
        show={activeView === "left"}
        {...sharedProps}
      >
        {leftContent}
      </SwitchTransition>
      <SwitchTransition
        leaveTo="hideRight"
        enterFrom="hideRight"
        show={activeView === "right"}
        {...sharedProps}
      >
        {rightContent}
      </SwitchTransition>
    </>
  )
}
