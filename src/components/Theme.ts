import { createGlobalStyle } from "styled-components"

/* eslint-disable-next-line @typescript-eslint/naming-convention */
export const Theme = createGlobalStyle`
  :root {
    --base-size: 16px;
    }
  html {
    box-sizing:     border-box;
    font-size:      var(--base-size);
  }
  *,
  *::before,
  *::after {
    box-sizing:     inherit;
  }
  body {
    background:     var(--bg);
    color:          var(--text-color);
    font-family:    var(--text-font-family);
    font-weight:    var(--text-font-weight);
    line-height:    var(--text-line-height);
    letter-spacing: var(--text-spacing);
    display: grid;
    margin: 0 1rem;
    position: relative;
    place-content: center;
    place-items: center; 
    text-rendering: geometricPrecision;
  }
`
