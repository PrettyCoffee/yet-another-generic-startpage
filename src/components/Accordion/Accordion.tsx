import { PropsWithChildren } from "react"

import { Disclosure } from "@headlessui/react"

import { HeaderButton } from "./fragments/HeaderButton"
import { Panel } from "./fragments/Panel"

type AccordionProps = {
  header: string | JSX.Element
  buttonLabel?: string
}

export const Accordion = ({
  header,
  buttonLabel,
  children,
}: PropsWithChildren<AccordionProps>) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <HeaderButton open={open} label={buttonLabel}>
            {header}
          </HeaderButton>
          <Panel>{children}</Panel>
        </>
      )}
    </Disclosure>
  )
}
