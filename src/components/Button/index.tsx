import React from 'react'

const baseClassName =
  'focus:outline-none hover:shadow my-1 flex p-3 rounded items-center justify-center'

const variants = {
  primary: `${baseClassName} bg-primary-600 text-white hover:bg-primary-500`,
  default: `${baseClassName} bg-white text-black`,
  success: `${baseClassName} bg-green-700 text-white`,
  error: `${baseClassName} bg-red-700 text-white`,
  warning: `${baseClassName} bg-yellow-300 text-black`,
  info: `${baseClassName} bg-blue-700 text-white`,
  transparent: `${baseClassName} bg-transparent`,
  link: `bg-transparent underline font-bold`,
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tabIndex: number
  className?: string
  variant: keyof typeof variants
  onClick?: (event: React.MouseEvent) => any
  type?: 'button' | 'submit' | 'reset' | undefined
  children?: React.ReactNode
}
const Button = ({
  children,
  tabIndex,
  className,
  variant,
  ...props
}: ButtonProps) => {
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
