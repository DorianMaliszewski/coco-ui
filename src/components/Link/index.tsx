import clsx from 'clsx'
import React, { useMemo } from 'react'

const classes = {
  base: 'link',
  hover: 'link-hover',
  variants: {
    primary: 'link-primary',
    neutral: 'link-neutral',
    secondary: 'link-secondary',
    accent: 'link-accent',
    success: 'link-success',
    info: 'link-info',
    warning: 'link-warning',
    error: 'link-error',
  },
} as const

export interface LinkProps {
  as?: string
  className: string
  children: React.ReactNode
  to: string
  variant: keyof typeof classes.variants
  type?: 'hover' | 'normal'
}

const Link = ({
  className,
  children,
  variant = 'primary',
  type = 'normal',
  ...props
}: LinkProps): JSX.Element => {
  const computedClasses = useMemo(() => {
    const variantClasses = variant ? classes.variants[variant] : ''

    return clsx(
      classes.base,
      variantClasses,
      type === 'hover' && classes.hover,
      className
    )
  }, [type, variant, className])

  return (
    <a className={computedClasses} {...props}>
      {children}
    </a>
  )
}

Link.defaultProps = {
  className: '',
} as Partial<LinkProps>

export default Link
