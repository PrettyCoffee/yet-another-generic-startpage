import { PropsWithChildren } from "react"

import { Disclosure } from "@headlessui/react"

import { HeaderButton } from "./fragments/HeaderButton"
import { Panel } from "./fragments/Panel"

type AccordionProps = {
  header: string | JSX.Element
}

export const Accordion = ({
  header,
  children,
}: PropsWithChildren<AccordionProps>) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <HeaderButton open={open}>{header}</HeaderButton>
          <Panel>{children}</Panel>
        </>
      )}
    </Disclosure>
  )
}
