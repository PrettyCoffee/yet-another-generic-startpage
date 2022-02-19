import { sortChangelogDesc } from "./utils/sortChangelogDesc"

export type Changelog = {
  version: string
  changes: string[]
}[]

export const changelog: Changelog = sortChangelogDesc([
  {
    version: "v1.2.0",
    changes: ["add Mini YAGS export in settings"],
  },
  {
    version: "v1.1.1",
    changes: ["fix changelog link styling bug"],
  },
  {
    version: "v1.1.0",
    changes: [
      "added google fonts toggle (folks tend to dislike google)",
      "added changelog (find the link on the bottom right)",
    ],
  },
  {
    version: "v1.0.0",
    changes: ["initial release"],
  },
])

export const firstVersion = changelog.slice(-1)[0].version
export const latestVersion = changelog[0].version
