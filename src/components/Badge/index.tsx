import React from 'react'
import './index.css'

type Variants = 'basic' | 'outline' | 'no-border'
type Sizes = 'xs' | 'sm' | 'md' | 'xl' | '2xl'

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
  const tokenClass = React.useMemo(() => `badge--${variant}--${size}`, [
    variant,
    size,
  ])
  return (
    <div className={[tokenClass, className].join(' ')} {...props}>
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
