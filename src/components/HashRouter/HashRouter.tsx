import { FC } from "react"

import { useUrlHash } from "./utils/useUrlHash"

export type HashRoutes = Record<string, FC | undefined>

interface HashRouterProps {
  defaultContent: FC
  routes: HashRoutes
}

export const HashRouter = ({ defaultContent, routes }: HashRouterProps) => {
  const hashUrl = useUrlHash()
  const Content = routes[hashUrl] || defaultContent
  return <Content />
}
