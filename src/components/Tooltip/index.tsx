import clsx from 'clsx'
import React, { useMemo } from 'react'

const classes = {
  base: 'tooltip',
  open: 'tooltip-open',
  variants: {
    primary: 'tooltip-primary',
    secondary: 'tooltip-secondary',
    accent: 'tooltip-accent',
    info: 'tooltip-info',
    error: 'tooltip-error',
    warning: 'tooltip-warning',
    success: 'tooltip-success',
  },
  positions: {
    top: 'tooltip-top',
    bottom: 'tooltip-bottom',
    left: 'tooltip-left',
    right: 'tooltip-right',
  },
} as const

export interface TooltipProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string
  children?: React.ReactNode
  position?: keyof typeof classes.positions
  forceOpen?: boolean
  variant: keyof typeof classes.variants
}

const Tooltip = ({
  text,
  children,
  position = 'top',
  forceOpen,
  className,
  variant,
}: TooltipProps): JSX.Element => {
  const computedClassNames = useMemo(() => {
    const variantClasses = variant
      ? classes.variants[variant] ?? undefined
      : undefined
    const positionClasses = position
      ? classes.positions[position] ?? undefined
      : undefined

    return clsx(
      classes.base,
      forceOpen ? classes.open : undefined,
      variantClasses,
      positionClasses,
      className
    )
  }, [forceOpen, variant, position, className])

  return (
    <div className={computedClassNames} data-tip={text}>
      {children}
    </div>
  )
}

export default Tooltip
