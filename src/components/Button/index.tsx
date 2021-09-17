import Icon, { IconName } from 'components/Icon'
import React from 'react'
import './index.css'

const variants = {
  primary: `btn-primary`,
  default: `btn-default`,
  success: `btn-success`,
  error: `btn-error`,
  warning: `btn-warning`,
  info: `btn-info`,
  transparent: `btn-transparent`,
  link: `btn-link`,
  'inverted-primary': `btn-primary-outline`,
  'inverted-default': `btn-default-outline`,
  'inverted-success': `btn-success-outline`,
  'inverted-error': `btn-error-outline`,
  'inverted-warning': `btn-warning-outline`,
  'inverted-info': `btn-info-outline`,
}

const sizes = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl',
  '2xl': 'btn-2xl',
}

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tabIndex: number
  className?: string
  variant: keyof typeof variants
  onClick?: (event: React.MouseEvent) => any
  type?: 'button' | 'submit' | 'reset' | undefined
  children?: React.ReactNode
  size?: ButtonSize
  icon?: IconName
  iconSize?: number
  iconPosition: 'left' | 'right'
}
const Button = ({
  children,
  tabIndex,
  className,
  variant,
  size,
  icon,
  iconPosition,
  iconSize,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      tabIndex={tabIndex}
      className={[
        variants[variant],
        size ? sizes[size] : '',
        className ?? '',
      ].join(' ')}
      {...props}
    >
      {icon ? (
        <>
          {iconPosition !== 'right' && (
            <Icon className="mr-1" name={icon} size={iconSize} />
          )}
          {children}
          {iconPosition === 'right' && (
            <Icon className="ml-1" name={icon} size={iconSize} />
          )}
        </>
      ) : (
        children
      )}
    </button>
  )
}

Button.defaultProps = {
  variant: 'primary',
  tabIndex: -1,
  iconPosition: 'left',
} as Partial<ButtonProps>

export default Button
