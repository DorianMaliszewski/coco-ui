import injectClassNames from 'helpers/injectClassNames'
import React from 'react'

const variants = {
  basic: `bg-primary-600 text-white`,
  outline: `border border-primary-600 text-primary-600`,
  'no-border': `text-primary-600`,
}

export interface BadgeProps {
  variant: keyof typeof variants
  className?: string
  children?: React.ReactNode
}

const StyledBadge = injectClassNames(
  'div'
)`flex rounded items-center justify-center`

const Badge = ({
  variant,
  children,
  className,
  ...props
}: BadgeProps): JSX.Element => (
  <StyledBadge className={`${variants[variant]} ${className}`} {...props}>
    {children}
  </StyledBadge>
)

Badge.defaultProps = {
  className: 'px-2 py-1',
  color: 'primary',
  variant: 'basic',
}

export default Badge
