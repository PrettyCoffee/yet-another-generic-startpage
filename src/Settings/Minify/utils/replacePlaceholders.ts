export const replacePlaceholders = (
  rawFile: string,
  lookup: Record<string, string>
) => {
  let copy = rawFile
  Object.keys(lookup).forEach(
    key => (copy = copy.replaceAll(`$${key}$`, lookup[key]))
  )
  return copy
}
