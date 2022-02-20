import { Theme } from './interface'
import { BaseTheme } from './base'

export const customersTheme: Theme = {
  primary: {
    default: '#FFC875',
    dark: '#BC9457',
    darkness: '#342B1D',
    light: '#FFF3E2',
  },
  ...BaseTheme,
}
