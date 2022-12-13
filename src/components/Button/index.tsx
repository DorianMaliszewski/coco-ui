import React, {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  RefObject,
  useMemo,
} from 'react'
import clsx from 'clsx'

const baseClasses = 'btn'
const outlineClasses = 'btn-outline'
const squareClasses = 'btn-square'
const roundedClasses = 'btn-circle'
const loadingClasses = 'loading'
const blockClasses = 'btn-block'

export const BUTTON_SIZES = {
  lg: 'btn-lg',
  md: 'btn-md',
  sm: 'btn-sm',
  xs: 'btn-xs',
} as const

export const BUTTON_VARIANTS = {
  default: '',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
  ghost: 'btn-ghost',
  link: 'btn-link',
  glass: 'glass',
} as const

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof BUTTON_VARIANTS
  size?: keyof typeof BUTTON_SIZES
  outline?: boolean
  rounded?: boolean
  square?: boolean
  loading?: boolean
  disabled?: boolean
  block?: boolean
}

function Button(
  {
    variant = 'default',
    size = 'md',
    outline = false,
    rounded = false,
    square = false,
    loading = false,
    block = false,
    children,
    className,
    type = 'button',
    disabled = false,
    ...props
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
): JSX.Element {
  const computeClassName = useMemo(
    () =>
      clsx([
        baseClasses,
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        { [outlineClasses]: outline },
        { [squareClasses]: square },
        { [roundedClasses]: rounded },
        { [loadingClasses]: loading },
        { [blockClasses]: block },
        className,
      ]),
    [variant, size, outline, rounded, square, loading, className]
  )
  return (
    <button
      className={computeClassName}
      type={type ?? 'button'}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
}

export default forwardRef(Button)
