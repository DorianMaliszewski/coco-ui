import classNames from 'classnames'
import React, { useMemo } from 'react'

type Variants = 'basic' | 'outline' | 'no-border'
type Sizes = 'xs' | 'sm' | 'md' | 'xl' | '2xl'

const SIZE_CLASSNAMES: Record<Sizes, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  xl: 'text-xl',
  '2xl': 'text-2xl',
}

const CLASSNAMES: Record<Variants, any> = {
  basic: {
    base: 'flex rounded items-center justify-center bg-primary-600 text-white',
  },
  outline: {
    base:
      'flex rounded items-center justify-center border border-primary-600 text-primary-600',
  },
  'no-border': {
    base: 'flex rounded items-center justify-center text-primary-600',
  },
}
export interface BadgeProps {
  variant?: Variants
  size?: Sizes
  className?: string
  children?: React.ReactNode
}

const Badge = ({
  variant = 'basic',
  children,
  className,
  size = 'md',
  ...props
}: BadgeProps): JSX.Element => {
  const badgeClassName = useMemo(() => {
    const classes = CLASSNAMES[variant] ?? CLASSNAMES.basic
    const sizeClasses = SIZE_CLASSNAMES[size] ?? SIZE_CLASSNAMES.md

    return classNames({
      [classes.base]: true,
      [sizeClasses]: true,
      [className ?? '']: true,
    })
  }, [variant, size, className])

  return (
    <div className={badgeClassName} {...props}>
      {children}
    </div>
  )
}

Badge.defaultProps = {
  className: 'px-2 py-1',
  color: 'primary',
  variant: 'basic',
}

export default Badge
