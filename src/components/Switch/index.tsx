import classNames from 'classnames'
import React, { AriaAttributes } from 'react'

const SwitchButton = ({
  className,
  children,
  checked,
  ...props
}: SwitchProps) => (
  <label
    className={classNames(
      'p-2 border border-gray-200 rounded hover:shadow',
      {
        ['bg-primary-700 text-white']: checked,
        shadow: !checked,
      },
      className
    )}
  >
    {children}
    <input
      type="checkbox"
      className="opacity-5 sr-only"
      {...props}
      size={undefined}
    />
  </label>
)

const defaultSizes = {
  xs: {
    label: 4,
    ball: 3,
    ballRight: 4,
  },
  sm: {
    label: 5,
    ball: 4,
    ballRight: 5,
  },
  md: {
    label: 6,
    ball: 4,
    ballRight: 5,
  },
  lg: {
    label: 8,
    ball: 6,
    ballRight: 7,
  },
  xl: {
    label: 12,
    ball: 10,
    ballRight: 11,
  },
  '2xl': {
    label: 16,
    ball: 12,
    ballRight: 14,
  },
}

const SwitchDefault = ({
  className = '',
  children,
  checked,
  id,
  size,
  onChange,
  labelPosition,
  ...props
}: Partial<SwitchProps>) => {
  const { label, ball, ballRight } = defaultSizes[size ?? 'md']

  return labelPosition === 'inside' || !labelPosition ? (
    <label
      htmlFor={id}
      className={`block cursor-pointer h-${label} flex items-center relative rounded-full px-2 hover:shadow ${
        checked
          ? 'border border-primary-500 bg-primary-700 text-white'
          : 'border border-gray-500 bg-gray-500 text-white'
      } ${className}`}
    >
      <span className={`px-1 ${checked ? `mr-${ball}` : `ml-${ball}`}`}>
        {children}
      </span>
      <div
        className={`absolute h-${ball} top-1/2 flex left-1 right-${ballRight} duration-300 transition-all transform -translate-y-1/2 ${
          checked ? 'translate-x-full' : ''
        }`}
      >
        <div
          className={`h-${ball} w-${ball} rounded-full bg-white border border-gray-500`}
        />
      </div>
      <input
        onChange={onChange}
        id={id}
        checked={checked}
        type="checkbox"
        className="opacity-5 sr-only"
        {...props}
      />
    </label>
  ) : (
    <label htmlFor={id} className="flex">
      {labelPosition === 'left' && <span className="mr-1">{children}</span>}
      <div
        className={`block cursor-pointer w-${
          ball * 3
        } h-${label} flex items-center relative rounded-full px-2 hover:shadow ${
          checked
            ? 'border border-primary-500 bg-primary-700 text-white'
            : 'border border-gray-500 bg-gray-500 text-white'
        } ${className}`}
      >
        <div
          className={`absolute h-${ball} top-1/2 flex left-1 right-${ballRight} duration-300 transition-all transform -translate-y-1/2 ${
            checked ? 'translate-x-full' : ''
          }`}
        >
          <div
            className={`h-${ball} w-${ball} rounded-full bg-white border border-gray-500`}
          />
        </div>
        <input
          onChange={onChange}
          id={id}
          checked={checked}
          type="checkbox"
          className="opacity-5 sr-only"
          {...props}
        />
      </div>
      {labelPosition === 'right' && <span className="ml-1">{children}</span>}
    </label>
  )
}

const SwitchButtons = ({
  className,
  checked,
  offChildren,
  onChildren,
  children,
  size,
  ...props
}: Partial<SwitchProps>) => (
  <label
    className={classNames(
      'cursor-pointer hover:shadow flex shadow-inner border-gray-200 border rounded',
      { [className ?? '']: true }
    )}
  >
    <div
      className={classNames('p-2 rounded mr-1', {
        'bg-primary-700 text-white': !checked,
      })}
    >
      {offChildren}
    </div>
    <div
      className={classNames('p-2 rounded', {
        'bg-primary-700 text-white': checked,
      })}
    >
      {onChildren}
    </div>
    <input type="checkbox" className="opacity-5 sr-only" {...props} />
  </label>
)

const variants = {
  button: SwitchButton,
  default: SwitchDefault,
  buttons: SwitchButtons,
}

type SwitchSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
type LabelPosition = 'left' | 'right' | 'inside'

export interface SwitchProps extends AriaAttributes {
  id?: string
  value?: string
  children?: React.ReactNode
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
  className?: string
  variant?: keyof typeof variants
  checked?: boolean
  defaultChecked?: boolean
  size?: SwitchSize
  labelPosition?: LabelPosition
  onChildren?: React.ReactNode
  offChildren?: React.ReactNode
}

const Switch = ({
  variant = 'default',
  checked,
  defaultChecked,
  onChange,
  ...props
}: SwitchProps): JSX.Element => {
  const [isChecked, setIsChecked] = React.useState(checked || defaultChecked)

  React.useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) {
      setIsChecked(!isChecked)
    } else {
      onChange(event)
    }
  }

  const Component = variants[variant]
    ? variants[variant]({ checked, onChange: handleChange, ...props })
    : variants.default({ checked, onChange: handleChange, ...props })
  return Component
}

export default Switch
