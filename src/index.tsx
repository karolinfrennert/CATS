import React from "react"
import ReactDOM from "react-dom"
import { App } from "./components/App"
import { Theme } from "./components/Theme"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <React.StrictMode>
    <Theme />
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
)

reportWebVitals()
