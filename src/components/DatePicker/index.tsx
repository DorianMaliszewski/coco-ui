import Input from '../Input'
import React, {
  FocusEventHandler,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import Icon from '../Icon'
import useClickOutsideHandler from '../../hooks/useClickOutsideHandler'
import MonthCalendar from './MonthCalendar'

export type DatePickerProps = {
  name?: string
  value?: Date
  onChange?: (newValue: Date) => void
  onBlur?: FocusEventHandler<HTMLInputElement>
  className?: string
  label?: string
  variant?: 'inside' | 'outside'
  disabled?: boolean
  error?: boolean
  required?: boolean
}

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      name,
      value,
      onChange,
      onBlur,
      label,
      variant,
      className,
      disabled,
      error,
      required,
    },
    ref
  ) => {
    if (value && !(value instanceof Date && !Number.isNaN(value))) {
      throw new Error(
        'DatePicker : value should be a Date instance or undefined'
      )
    }
    const [inputValue, setInputValue] = useState(value?.toLocaleDateString())
    const [open, setOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useClickOutsideHandler(containerRef, () => {
      setOpen(false)
    })

    useEffect(() => {
      if (value) {
        if (!(value instanceof Date && !Number.isNaN(value))) {
          throw new Error(
            'DatePicker : value should be a Date instance or undefined'
          )
        }
        setInputValue(value.toLocaleDateString())
      }
    }, [value])

    const handleFocus = useCallback(() => {
      if (!disabled) setOpen(true)
    }, [disabled])

    const handleDateClick = useCallback(
      (newDate) => {
        onChange?.(newDate)
        setOpen(false)
      },
      [onChange]
    )

    const containerClassNames = useMemo(
      () =>
        classNames({
          ['absolute top-full shadow rounded overflow-hidden z-100 bg-background']: true,
          ['sr-only']: !open,
        }),
      [open]
    )

    const iconClassNames = useMemo(
      () =>
        classNames('absolute right-2', {
          'text-gray-400': !error && !open,
          'text-primary-700': !error && open,
          'text-error-600': error,
          'bottom-3': variant && label,
        }),
      [error, variant, label, open]
    )

    return (
      <div ref={containerRef} className="flex relative items-center">
        <Input
          className={className}
          label={label}
          variant={variant}
          onFocus={handleFocus}
          onBlur={onBlur}
          name={name}
          value={inputValue}
          ref={ref}
          disabled={disabled}
          error={error}
          required={required}
        />
        {!disabled ? (
          <>
            <Icon
              name="calendar"
              type="outline"
              size={18}
              className={iconClassNames}
            />
            <div className={containerClassNames}>
              <MonthCalendar selected={value} onDateClick={handleDateClick} />
            </div>
          </>
        ) : null}
      </div>
    )
  }
)

DatePicker.displayName = 'DatePicker'
export default DatePicker
