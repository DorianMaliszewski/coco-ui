import clsx from 'clsx'
import React, { useMemo } from 'react'

const classes = {
  base: 'badge',
  outline: 'badge-outline',
  variants: {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    accent: 'badge-accent',
    ghost: 'badge-ghost',
    info: 'badge-info',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
  },
  sizes: {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg',
  },
} as const

export interface BadgeProps {
  size?: keyof typeof classes['sizes']
  className?: string
  children?: React.ReactNode
  variant?: keyof typeof classes['variants']
  outline?: boolean
}

const Badge = ({
  children,
  className,
  size = 'md',
  outline,
  variant,
  ...props
}: BadgeProps): JSX.Element => {
  const badgeClassName = useMemo(() => {
    const sizeClass = size ? classes.sizes[size] : ''
    const variantClass = variant ? classes.variants[variant] : ''

    return clsx(
      variantClass,
      classes.base,
      sizeClass,
      outline && classes.outline,
      className
    )
  }, [size, variant, className])

  return (
    <div className={badgeClassName} {...props}>
      {children}
    </div>
  )
}

export default Badge
