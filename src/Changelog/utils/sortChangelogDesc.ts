import { Changelog } from "../data"

export const sortChangelogDesc = (changelog: Changelog) =>
  changelog.sort((a, b) => (a.version < b.version ? 1 : -1))
