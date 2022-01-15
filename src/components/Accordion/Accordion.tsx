import { PropsWithChildren } from "react"

import { Disclosure } from "@headlessui/react"

import { HeaderButton } from "./fragments/HeaderButton"
import { Panel } from "./fragments/Panel"

type AccordionProps = {
  header: string | JSX.Element
  buttonLabel?: string
  defaultOpen?: boolean
}

export const Accordion = ({
  header,
  buttonLabel,
  defaultOpen,
  children,
}: PropsWithChildren<AccordionProps>) => (
  <Disclosure defaultOpen={defaultOpen}>
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
