import classNames from 'classnames'
import Icon, { IconName } from 'components/Icon'
import React, { useMemo } from 'react'
import {
  ButtonSize,
  ButtonSizeClassNames,
  ButtonVariant,
  ButtonVariantClassNames,
} from './variant'

type ButtonType = 'button' | 'submit' | 'reset' | undefined
export type ButtonProps = {
  tabIndex?: number
  className?: string
  variant?: ButtonVariant
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: ButtonType
  children?: React.ReactNode
  size?: ButtonSize
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
  const buttonClassNames = useMemo(() => {
    const classes =
      ButtonVariantClassNames[variant] ?? ButtonVariantClassNames.primary
    const sizeClasses = ButtonSizeClassNames[size] ?? ButtonSizeClassNames.md

    return classNames({
      [classes.base]: true,
      [sizeClasses]: true,
      [classes.default]: !disabled,
      [classes.disabled]: disabled,
      [className ?? '']: true,
    })
  }, [className, variant, size, disabled])

  return (
    <button
      disabled={disabled}
      tabIndex={tabIndex}
      className={buttonClassNames}
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
