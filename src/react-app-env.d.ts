/// <reference types="react-scripts" />

import { Theme } from './themes/interface'

declare module '*.mp4' {
  const src: string
  export default src
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
