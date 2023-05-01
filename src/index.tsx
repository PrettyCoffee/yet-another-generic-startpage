import React from "react"

import { createRoot } from "react-dom/client"

import App from "./App"
import { ErrorBoundary } from "./ErrorBoundary"
import { Providers } from "./Providers"
import reportWebVitals from "./reportWebVitals"

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
