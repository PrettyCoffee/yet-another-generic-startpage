import React from "react"
import { createRoot } from "react-dom/client"

import App from "./App"
import { ErrorBoundary } from "./ErrorBoundary"
import { Providers } from "./Providers"

const root = document.getElementById("root")
if (!root) throw new Error("Root node could not be found (react-dom)")

createRoot(root).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Providers>
        <App />
      </Providers>
    </ErrorBoundary>
  </React.StrictMode>
)
