import clsx from 'clsx'
import React, { InputHTMLAttributes, ReactNode, useMemo } from 'react'

const classes = {
  base: 'toggle',
  variants: {
    primary: 'toggle-primary',
    secondary: 'toggle-secondary',
    accent: 'toggle-accent',
    success: 'toggle-success',
    info: 'toggle-info',
    warning: 'toggle-warning',
    error: 'toggle-error',
  },
  sizes: {
    xs: 'toggle-xs',
    sm: 'toggle-sm',
    md: 'toggle-md',
    lg: 'toggle-lg',
  },
} as const

export type SwitchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> & {
  variant?: keyof typeof classes.variants
  size?: keyof typeof classes.sizes
  children?: ReactNode
  labelPosition?: 'left' | 'right'
}

const Switch = ({
  variant = 'primary',
  size,
  children,
  labelPosition = 'right',
  className,
  ...props
}: SwitchProps): JSX.Element => {
  const computedClasses = useMemo(() => {
    const variantClasses = variant ? classes.variants[variant] : ''
    const sizeClasses = size ? classes.sizes[size] : ''

    return clsx(classes.base, variantClasses, sizeClasses)
  }, [variant, size])

  if (children)
    return (
      <div className={clsx('form-control', className)}>
        <label className="label cursor-pointer gap-2">
          {labelPosition === 'left' ? (
            <span className="label-text">{children}</span>
          ) : null}
          <input {...props} type="checkbox" className={computedClasses} />
          {labelPosition !== 'left' ? (
            <span className="label-text">{children}</span>
          ) : null}
        </label>
      </div>
    )

  return <input {...props} type="radio" className={computedClasses} />
}

export default Switch
