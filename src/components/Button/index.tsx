import Icon, { IconName } from 'components/Icon'
import React from 'react'
import './index.css'

type Variants =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'transparent'
  | 'link'
  | 'inverted-primary'
  | 'inverted-secondary'
  | 'inverted-success'
  | 'inverted-error'
  | 'inverted-warning'
  | 'inverted-info'

type Sizes = 'xs' | 'sm' | 'md' | 'xl' | '2xl'

type ButtonType = 'button' | 'submit' | 'reset' | undefined
export type ButtonProps = {
  tabIndex?: number
  className?: string
  variant?: Variants
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: ButtonType
  children?: React.ReactNode
  size?: Sizes
  icon?: IconName
  iconSize?: number
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  title?: string
}
const Button = ({
  children,
  tabIndex,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition,
  iconSize,
  disabled,
  ...props
}: ButtonProps): JSX.Element => {
  const tokenClass = React.useMemo(() => `button--${variant}--${size}`, [
    variant,
    size,
  ])
  return (
    <button
      disabled={disabled}
      tabIndex={tabIndex}
      className={[tokenClass, className].join(' ')}
      {...props}
    >
      {icon ? (
        <>
          {iconPosition !== 'right' ? (
            <Icon className="mr-1" name={icon} size={iconSize} />
          ) : null}
          {children}
          {iconPosition === 'right' ? (
            <Icon className="ml-1" name={icon} size={iconSize} />
          ) : null}
        </>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
