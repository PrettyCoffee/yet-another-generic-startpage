import { Changelog } from "../data"

export const sortChangelogDesc = (changelog: Changelog) =>
  changelog.toSorted((a, b) => (a.version < b.version ? 1 : -1))
