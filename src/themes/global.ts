import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*[responsive='only-phone'] {
    display: none;
    @media (max-width: 425px) {
      display: block;
    }
  }
  *[responsive='only-tablet'] {
    display: none;
    @media (max-width: 1023px) {
      display: block;
    }
  }
  *[responsive='only-desktop'] {
    display: none;
    @media only screen and (min-width: 1024px) {
      display: block;
    }
  }
  
  *[responsive='starting-table'] {
    display: none;
    @media (max-width: 1023px) {
      display: block;
    }
  }
  
  body {
    background-color: transparent;
  }
  
`
