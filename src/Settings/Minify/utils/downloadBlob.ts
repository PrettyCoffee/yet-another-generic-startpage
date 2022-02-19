export const downloadBlob = (blobUrl: string, fileName: string) => {
  const link = document.createElement("a")

  link.href = blobUrl
  link.download = fileName

  document.body.appendChild(link)

  link.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    })
  )

  document.body.removeChild(link)
}
