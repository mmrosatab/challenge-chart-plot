import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  /* scrollbar style */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgb(10, 18, 42);
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(102, 102, 102);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(102, 102, 102);
  }

  /* import google fonts */
  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    src: url("./fonts/source-sans-pro-v11-latin-regular.eot");
    /* IE9 Compat Modes */
    src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"),
      url("/fonts/source-sans-pro-v11-latin-regular.eot?#iefix") format("embedded-opentype"),
      url("/fonts/source-sans-pro-v11-latin-regular.woff2") format("woff2"),
      url("/fonts/source-sans-pro-v11-latin-regular.woff") format("woff"),
      url("/fonts/source-sans-pro-v11-latin-regular.ttf") format("truetype"),
      url("/fonts/source-sans-pro-v11-latin-regular.svg#SourceSansPro") format("svg");
  }
`

export default GlobalStyle
