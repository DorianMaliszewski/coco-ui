export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'transparent'
  | 'link'
  | 'inverted-primary'
  | 'inverted-secondary'
  | 'inverted-success'
  | 'inverted-error'
  | 'inverted-warning'
  | 'inverted-info'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'xl' | '2xl'

const baseButtonClassname = `focus:outline-none flex rounded items-center justify-center p-2`

export const ButtonVariantClassNames: Record<ButtonVariant, any> = {
  primary: {
    base: `${baseButtonClassname} bg-primary-600 text-white focus:ring-2 focus:ring-offset-1 focus:ring-primary-300`,
    disabled: 'opacity-30 cursor-not-allowed',
    default: 'hover:shadow',
  },
  secondary: {
    base: `${baseButtonClassname} bg-white text-foreground border border-foreground focus:ring-2 focus:ring-offset-1 focus:ring-foreground`,
    disabled: 'opacity-30 cursor-not-allowed',
    default: 'hover:shadow',
  },
  success: {
    base: `${baseButtonClassname} bg-success-600 text-white focus:ring-2 focus:ring-offset-1 focus:ring-success-300`,
    disabled: 'opacity-30 cursor-not-allowed',
    default: 'hover:shadow hover:bg-success-700',
  },
  error: {
    base: `${baseButtonClassname} bg-error-600 text-white focus:ring-2 focus:ring-offset-1 focus:ring-error-300`,
    disabled: 'opacity-30 cursor-not-allowed',
    default: 'hover:shadow hover:bg-error-700',
  },
  warning: {
    base: `${baseButtonClassname} bg-warning-500 text-white focus:ring-2 focus:ring-offset-1 focus:ring-warning-200`,
    disabled: 'opacity-30 cursor-not-allowed',
    default: 'hover:shadow hover:bg-warning-600',
  },
  info: {
    base: `${baseButtonClassname} bg-info-600 text-white focus:ring-2 focus:ring-offset-1 focus:ring-info-300`,
    disabled: 'opacity-30 cursor-not-allowed',
    default: 'hover:shadow hover:bg-info-700',
  },
  transparent: {
    base: `${baseButtonClassname} bg-transparent`,
    disabled: 'opacity-30 cursor-not-allowed',
    default: '',
  },
  link: {
    base: `${baseButtonClassname} bg-transparent underline font-bold`,
    disabled: 'opacity-30 cursor-not-allowed',
    default: '',
  },
  'inverted-primary': {
    base: `${baseButtonClassname} border-primary-600 border text-primary-600  focus:ring-2 focus:ring-offset-1 focus:ring-primary-300`,
    disabled: 'opacity-30 cursor-not-allowed',
    default: 'hover:shadow hover:bg-primary-600 hover:text-white',
  },
  'inverted-secondary': {
    base: `${baseButtonClassname} bg-foreground text-white border border-foreground focus:ring-2 focus:ring-offset-1 focus:ring-foreground`,
    disabled: 'opacity-30 cursor-not-allowed',
    default: 'hover:shadow hover:bg-background hover:text-foreground',
  },
  'inverted-success': {
    base: `${baseButtonClassname} text-success-600 border border-success-600 focus:ring-2 focus:ring-offset-1 focus:ring-success-300`,
    disabled: 'opacity-30 cursor-not-allowed',
    default: 'hover:shadow hover:bg-success-600 hover:text-white',
  },
  'inverted-error': {
    base: `${baseButtonClassname} text-error-600 border border-error-600 focus:ring-2 focus:ring-offset-1 focus:ring-error-300`,
    disabled: 'opacity-30 cursor-not-allowed',
    default: 'hover:shadow hover:bg-error-600 hover:text-white',
  },
  'inverted-warning': {
    base: `${baseButtonClassname} text-warning-500 border border-warning-500 focus:ring-2 focus:ring-offset-1 focus:ring-warning-200`,
    disabled: 'opacity-30 cursor-not-allowed',
    default: 'hover:shadow hover:bg-warning-500 hover:text-foreground',
  },
  'inverted-info': {
    base: `${baseButtonClassname} text-info-600 border border-info-600 focus:ring-2 focus:ring-offset-1 focus:ring-info-300`,
    disabled: 'opacity-30 cursor-not-allowed',
    default: 'hover:shadow hover:bg-info-600 hover:text-white',
  },
}

export const ButtonSizeClassNames: Record<ButtonSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  xl: 'text-xl',
  '2xl': 'text-2xl',
}
