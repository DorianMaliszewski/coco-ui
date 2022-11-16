import clsx from 'clsx'
import React, { ReactNode, useMemo } from 'react'

const classes = {
  base: 'radio',
  variants: {
    primary: 'radio-primary',
    secondary: 'radio-secondary',
    accent: 'radio-accent',
    success: 'radio-success',
    info: 'radio-info',
    warning: 'radio-warning',
    error: 'radio-error',
  },
  sizes: {
    xs: 'radio-xs',
    sm: 'radio-sm',
    md: 'radio-md',
    lg: 'radio-lg',
  },
  error: 'radio-error',
} as const

export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  children?: ReactNode
  className?: string
  error?: boolean
  variant?: keyof typeof classes.variants
  size?: keyof typeof classes.sizes
  labelPosition?: 'left' | 'right'
}

const Radio = ({
  className,
  children,
  error,
  variant = 'primary',
  size,
  labelPosition = 'right',
  ...props
}: RadioProps): JSX.Element => {
  const computedClasses = useMemo(() => {
    const variantClasses = variant ? classes.variants[variant] : ''
    const sizeClasses = size ? classes.sizes[size] : ''

    return clsx(
      classes.base,
      error && classes.error,
      !error && variantClasses,
      sizeClasses
    )
  }, [variant, size])

  if (children)
    return (
      <div className={clsx('form-control', className)}>
        <label className="label cursor-pointer gap-2">
          {labelPosition === 'left' ? (
            <span className="label-text">{children}</span>
          ) : null}
          <input {...props} type="radio" className={computedClasses} />
          {labelPosition !== 'left' ? (
            <span className="label-text">{children}</span>
          ) : null}
        </label>
      </div>
    )

  return <input {...props} type="radio" className={computedClasses} />
}

export default Radio
