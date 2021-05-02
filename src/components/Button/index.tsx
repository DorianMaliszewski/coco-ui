import React from 'react'

const baseClassName =
  'focus:outline-none hover:shadow my-1 flex p-3 rounded items-center justify-center'

const variants = {
  primary: `${baseClassName} bg-primary-600 text-white hover:bg-primary-700 focus:ring focus:ring-offset-1 focus:ring-primary-300`,
  default: `${baseClassName} bg-white text-foreground shadow focus:ring focus:ring-offset-1 focus:ring-foreground`,
  success: `${baseClassName} bg-success-600 text-white hover:bg-success-700 focus:ring focus:ring-offset-1 focus:ring-success-300`,
  error: `${baseClassName} bg-error-600 text-white hover:bg-error-700 focus:ring focus:ring-offset-1 focus:ring-error-300`,
  warning: `${baseClassName} bg-warning-400 text-white hover:bg-warning-500 focus:ring focus:ring-offset-1 focus:ring-warning-200`,
  info: `${baseClassName} bg-info-600 text-white hover:bg-info-700 focus:ring focus:ring-offset-1 focus:ring-info-300`,
  transparent: `${baseClassName} bg-transparent`,
  link: `bg-transparent underline font-bold`,
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tabIndex: number
  className?: string
  variant: keyof typeof variants
  onClick?: (event: React.MouseEvent) => unknown
  type?: 'button' | 'submit' | 'reset' | undefined
  children?: React.ReactNode
}
const Button = ({
  children,
  tabIndex,
  className,
  variant,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      tabIndex={tabIndex}
      className={`${variants[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  variant: 'primary',
  tabIndex: -1,
} as Partial<ButtonProps>

export default Button
