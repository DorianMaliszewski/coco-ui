import clsx from 'clsx'
import React, { useMemo } from 'react'
import './index.css'

const classes = {
  base: 'loader',
  variants: {
    accent: 'loader-accent',
    current: 'loader-current',
    error: ' loader-error',
    info: 'loader-info',
    primary: 'loader-primary',
    secondary: 'loader-secondary',
    success: 'loader-success',
    warning: 'loader-warning',
  },
  sizes: {
    xs: 'loader-xs',
    sm: 'loader-sm',
    md: 'loader-md',
    lg: 'loader-lg',
  },
  animated: 'loader-animated',
} as const

export interface LoaderProps {
  size?: keyof typeof classes.sizes
  variant?: keyof typeof classes.variants
  className?: string
  animated?: boolean
}

const Loader = ({
  size = 'md',
  variant = 'primary',
  className = '',
  animated,
}: LoaderProps): JSX.Element => {
  const computedClasses = useMemo(() => {
    const variantClasses = variant ? classes.variants[variant] : ''
    const sizeClasses = size ? classes.sizes[size] : ''

    return clsx(
      classes.base,
      variantClasses,
      sizeClasses,
      animated && classes.animated,
      className
    )
  }, [variant, size, animated, className])

  return (
    <svg
      className={computedClasses}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )
}

export default Loader
