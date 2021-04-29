import React from "react"
import ReactDOM from "react-dom"
import { App } from "./components/App"
import reportWebVitals from "./reportWebVitals"
import { getCat } from "./GetCatPicture"

getCat()

ReactDOM.render(
  <React.StrictMode>
    <App />
    <img alt="meningful text" src="https://cataas.com/cat/gif" />
  </React.StrictMode>,
  document.getElementById("root"),
)

reportWebVitals()
