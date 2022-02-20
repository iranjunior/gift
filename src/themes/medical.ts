import { Theme } from './interface'
import { BaseTheme } from './base'

export const medicalTheme: Theme = {
  primary: {
    default: '#C1E0E5',
    dark: '#9AAFB3',
    darkness: '#2C2F30',
    light: '#E5F6F9',
  },
  ...BaseTheme,
}
