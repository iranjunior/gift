export interface Theme extends Base {
  primary: colors
}

export interface Base {
  spacing: Spacing
  font: {
    sizes: fontSize
    lineHeight: lineHeight
    weight: fontWeight
    family: fontFamily
  }
  colors: {
    neutral: colors
    feedback: {
      warning: string
      negative: string
      positive: string
    }
  }
}
export interface colors {
  darkness: string
  dark: string
  default: string
  light: string
  lightness?: string
}

export interface fontSize {
  xxxxs: string
  xxxs: string
  xxs: string
  xs: string
  sm: string
  md: string
  ml: string
  lg: string
  xl: string
  xxl: string
  xxxl: string
  display: string
  giant: string
}

export interface lineHeight {
  tight: string
  medium: string
  distant: string
  superDistant: string
}

export interface fontWeight {
  heavy: number
  bold: number
  regular: number
}

export interface fontFamily {
  default: string
  highlight: string
  sliver: string
}
export interface Spacing {
  quark: string
  nano: string
  internal: string
  xxxs: string
  xxs: string
  xs: string
  sm: string
  md: string
  xl: string
  xxl: string
}
