import { Theme } from './interface'
import { BaseTheme } from './base'

export const companiesTheme: Theme = {
  primary: {
    default: '#BDD183',
    dark: '#727A58',
    darkness: '#31342A',
    light: '#ECF3D8',
  },
  ...BaseTheme,
}
