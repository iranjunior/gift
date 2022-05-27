import { Base } from './interface'

export const BaseTheme: Base = {
  colors: {
    base: {
      default: '#FFC875',
      dark: '#BC9457',
      darkness: '#342B1D',
      light: '#FFF3E2',
    },
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
    quark: '0.25rem', // quark: '4px',
    nano: '0.5rem', // nano: '8px',
    bit: '0.75rem', // bit: '12px',
    xxxs: '1rem', // xxxs: '16px',
    xxs: '1.5rem', // xxs: '24px',
    xs: '2rem', // xs: '32px',
    sm: '2.5rem', // sm: '40px',
    md: '3rem', // md: '48px',
    internal: '1.3rem', // internal: '20px',
    xl: '3.75rem', // xl: '60px',
    xxl: '5rem', // xxl: '80px',
    xxxl: '6.5rem', // xxl: '104px',
  },
  breakpoints: {
    tablet: '768px',
    phone: '425px',
    desktop: '1024px',
  },
  font: {
    sizes: {
      xxxxs: '0.625rem', // xxxxs: '10px',
      xxxs: '0.75rem', // xxxs: '12px',
      xxs: '0.875rem', // xxs: '14px',
      xs: '1rem', // xs: '16px',
      sm: '1.25rem', // sm: '20px',
      md: '1.5rem', // md: '24px',
      ml: '1.75rem', // ml: '28px',
      lg: '2rem', // lg: '32px',
      xl: '2.5rem', // xl: '40px',
      xxl: '3rem', // xxl: '48px',
      xxxl: '4rem', // xxxl: '64px',
      display: '5rem', // display: '80px',
      giant: '6rem', // giant: '96px',
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
      sliver: 'ITC Clearface Std',
    },
  },
}
