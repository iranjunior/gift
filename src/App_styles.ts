import { createGlobalStyle } from 'styled-components'

export const FarmeStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: 'Clearface ITC Pro';
  src: url('../public/ClearfaceStd-Regular.otf') format('opentype');
}
highlight {
  font-family: 'Gloria Hallelujah';
  font-weight: normal;
}
details > summary {
  list-style-type: none;
}

details > summary::-webkit-details-marker {
  display: none;
}

details > summary::after {
  content: url('./assets/images/down_arrow.svg');
}
summary::before {
  transform: rotate(0);
  transform-origin: 0.2rem 50%;
  transition: 0.25s transform ease;
}
details[open] > summary::after {
  content: url('./assets/images/up_arrow.svg');
}

`
