import { Base } from './interface'
export const BaseTheme: Base = {
  colors: {
    neutral: {
      darkness: '#000000',
      dark: '#696969',
      default: '#999999',
      light: '#F2F2F2',
      lightness: '#FFF',
    },
    feedback: {
      warning: '#6A5535',
      negative: '#DDAE67',
      positive: '#FFC875',
    },
  },
  spacing: {
    quark: '4px',
    nano: '8px',
    xxxs: '16px',
    xxs: '24px',
    xs: '32px',
    sm: '40px',
    md: '48px',
    internal: '20px',
    xl: '60px',
    xxl: '80px',
  },
  font: {
    sizes: {
      xxxxs: '10px',
      xxxs: '12px',
      xxs: '14px',
      xs: '16px',
      sm: '20px',
      md: '24px',
      ml: '28px',
      lg: '32px',
      xl: '40px',
      xxl: '48px',
      xxxl: '64px',
      display: '80px',
      giant: '96px',
    },
    lineHeight: {
      tight: '100%',
      medium: '125%',
      distant: '150%',
      superDistant: '200%',
    },
    weight: {
      heavy: 700,
      bold: 600,
      regular: 500,
    },
    family: {
      default: 'Inter',
      highlight: 'Gloria Hallelujah',
      sliver: 'Clearface ITC Pro',
    },
  },
}
