import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;  
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    height: 100%;
  }
`
export default GlobalStyles
