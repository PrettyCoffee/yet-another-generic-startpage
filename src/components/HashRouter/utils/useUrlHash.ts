import { useState } from "react"

const getUrlHash = () => window.location.hash

export const useUrlHash = () => {
  const [hash, setHash] = useState(getUrlHash())
  window.addEventListener("hashchange", () => {
    setHash(getUrlHash())
  })
  return hash
}
