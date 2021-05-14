import Icon, { IconName } from 'components/Icon'
import React from 'react'

const baseClassName =
  'focus:outline-none hover:shadow flex rounded items-center justify-center'

const variants = {
  primary: `${baseClassName} bg-primary-600 text-white hover:bg-primary-700 focus:ring focus:ring-offset-1 focus:ring-primary-300`,
  default: `${baseClassName} bg-white text-foreground border border-foreground focus:ring focus:ring-offset-1 focus:ring-foreground`,
  success: `${baseClassName} bg-success-600 text-white hover:bg-success-700 focus:ring focus:ring-offset-1 focus:ring-success-300`,
  error: `${baseClassName} bg-error-600 text-white hover:bg-error-700 focus:ring focus:ring-offset-1 focus:ring-error-300`,
  warning: `${baseClassName} bg-warning-400 text-white hover:bg-warning-500 focus:ring focus:ring-offset-1 focus:ring-warning-200`,
  info: `${baseClassName} bg-info-600 text-white hover:bg-info-700 focus:ring focus:ring-offset-1 focus:ring-info-300`,
  transparent: `${baseClassName} bg-transparent`,
  link: `bg-transparent underline font-bold`,
}

const sizes = {
  xs: 'text-xs py-1 px-2',
  sm: 'text-sm py-1 px-2',
  md: 'py-1 px-2',
  lg: 'text-lg py-1 px-2',
  xl: 'text-xl py-1 px-3',
  '2xl': 'text-2xl py-1 px-3',
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
  iconPosition?: 'left' | 'right'
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
      className={`${variants[variant]} ${size ? sizes[size] : ''} ${
        className ?? ''
      }`}
      {...props}
    >
      {icon ? (
        <>
          {iconPosition !== 'right' && <Icon name={icon} size={iconSize} />}
          <div className="px-1">{children}</div>
          {iconPosition === 'right' && <Icon name={icon} size={iconSize} />}
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
