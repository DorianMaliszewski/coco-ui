import React, { AriaAttributes } from 'react'

const SwitchButton = ({
  className,
  children,
  size,
  checked,
  ...props
}: SwitchProps) => (
  <label
    className={`p-2 border border-gray-200 rounded hover:shadow ${
      checked ? 'bg-primary-700 text-white' : 'shadow'
    }${className ?? ''}`}
  >
    {children}
    <input type="checkbox" className="opacity-5 sr-only" {...props} />
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
  ...props
}: Partial<SwitchProps>) => {
  const { label, ball, ballRight } = defaultSizes[size ?? 'md']

  return (
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
  )
}

const SwitchButtons = ({
  className,
  children,
  size,
  checked,
  offChildren,
  onChildren,
  ...props
}: Partial<SwitchProps>) => (
  <label
    className={`cursor-pointer hover:shadow flex shadow-inner rounded border-gray-200 border rounded ${
      className ?? ''
    }`}
  >
    <div
      className={`p-2 rounded mr-1 ${
        !checked ? 'bg-primary-700 text-white' : ''
      }`}
    >
      {offChildren}
    </div>
    <div
      className={`p-2 rounded ${checked ? 'bg-primary-700 text-white' : ''}`}
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
