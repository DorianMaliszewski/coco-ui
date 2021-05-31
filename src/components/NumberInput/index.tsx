import Icon from 'components/Icon'
import React from 'react'

const sizes = {
  xs: {
    container: 'px-1 text-xs',
    icon: 'p-1',
  },
  sm: {
    container: 'px-1 text-sm',
    icon: 'p-1',
  },
  md: {
    container: 'p-1',
    icon: 'p-1',
  },
  lg: {
    container: 'py-2 px-1',
    icon: 'p-1',
  },
  xl: {
    container: 'text-lg py-3 px-1',
    icon: '',
  },
  '2xl': {
    container: 'text-xl py-4 px-1',
    icon: '',
  },
}

export interface NumberInputProps {
  label?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  className?: string
  id?: string
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any
  tabIndex?: number
  step?: number
  size?: keyof typeof sizes
  value: string
  width?: number | string
}

const authorizedKeys = [
  'Digit0',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'NumLock',
  'Numpad0',
  'Numpad1',
  'Numpad2',
  'Numpad3',
  'Numpad4',
  'Numpad5',
  'Numpad6',
  'Numpad7',
  'Numpad8',
  'Numpad9',
  'NumpadDecimal',
  'ArrowDown',
  'ArrowUp',
  'ArrowLeft',
  'ArrowRight',
  'Escape',
  'Tab',
  'Delete',
  'Backspace',
]
const NumberInput = ({
  name,
  id,
  'aria-labelledby': ariaLabelledBy,
  'aria-label': ariaLabel,
  value: defaultValue,
  onChange,
  label,
  className = '',
  step = 1,
  tabIndex,
  size = 'md',
  width,
}: NumberInputProps): JSX.Element => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [value, setValue] = React.useState(defaultValue ?? '0')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    onChange?.(event)
  }

  const handleDecrement = () => {
    if (inputRef.current) {
      const currentValue = parseInt(inputRef.current?.value || '0', 10)
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        HTMLInputElement.prototype,
        'value'
      )?.set
      nativeInputValueSetter?.call(
        inputRef.current,
        `${currentValue >= step ? currentValue - step : 0}`
      )

      inputRef.current.dispatchEvent(new Event('input', { bubbles: true }))
    }
  }

  const handleIncrement = () => {
    if (inputRef.current) {
      const currentValue = parseInt(inputRef.current?.value || '0', 10)
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        HTMLInputElement.prototype,
        'value'
      )?.set
      nativeInputValueSetter?.call(inputRef.current, `${currentValue + step}`)

      inputRef.current.dispatchEvent(new Event('input', { bubbles: true }))
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!authorizedKeys.includes(event.code)) {
      event.stopPropagation()
      event.preventDefault()
    }
  }

  const sizeClassNames = sizes[size]

  return (
    <label
      className={`border border-gray-300 focus-within:text-primary-600 focus-within:border-primary-600 rounded outline-none focus:ring-2 ring-primary-200 text-black flex items-center ${
        sizeClassNames?.container ?? ''
      } ${width ? `w-${width}` : ''} ${className ?? ''}`}
    >
      <button className="appearance-none focus:outline-none">
        <Icon
          name="minus"
          className={`cursor-pointer ${sizeClassNames?.icon ?? ''}`}
          onClick={handleDecrement}
        />
      </button>
      <input
        ref={inputRef}
        className={`min-w-0 text-center flex-grow text-black focus:outline-none appereance-none`}
        name={name}
        id={id}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        value={value}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        tabIndex={tabIndex}
      />
      <button className="appearance-none focus:outline-none">
        <Icon
          name="plus"
          className={`cursor-pointer ${sizeClassNames?.icon ?? ''}`}
          onClick={handleIncrement}
        />
      </button>
    </label>
  )
}

export default NumberInput
