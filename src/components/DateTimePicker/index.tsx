import Input from '../Input'
import React, {
  FocusEventHandler,
  forwardRef,
  KeyboardEvent,
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
import TimeCalendar from './TimeCalendar'

export type DateTimePickerProps = {
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
  onClickOutside?: () => void | Promise<void>
}

const DateTimePicker = forwardRef<HTMLInputElement, DateTimePickerProps>(
  (
    {
      name,
      value,
      onChange,
      onClickOutside,
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
        'DateTimePicker : value should be a Date instance or undefined'
      )
    }
    const [inputValue, setInputValue] = useState(value)
    const [open, setOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useClickOutsideHandler(containerRef, () => {
      setOpen(false)
      onClickOutside?.()
    })

    useEffect(() => {
      if (value) {
        if (!(value instanceof Date && !Number.isNaN(value))) {
          throw new Error(
            'DateTimePicker : value should be a Date instance or undefined'
          )
        }
        setInputValue(value)
      }
    }, [value])

    const handleFocus = useCallback(() => {
      if (!disabled) setOpen(true)
    }, [disabled])

    const handleClick = useCallback(() => {
      if (!disabled) setOpen(true)
    }, [disabled])

    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Escape') {
          setOpen(false)
        }
      },
      []
    )

    const handleDateClick = useCallback(
      (newDate) => {
        onChange?.(newDate)
      },
      [onChange]
    )

    const handleTimeClick = useCallback(
      (hours: number, minutes: number) => {
        if (value) {
          const newValue = new Date(value)
          newValue.setHours(hours)
          newValue.setMinutes(minutes)
          onChange?.(newValue)
        } else {
          onChange?.(new Date(0, 0, 0, hours, minutes))
        }
      },
      [onChange, value]
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
        classNames('absolute right-2 bottom-3', {
          'text-gray-400': !error && !open,
          'text-primary-700': !error && open,
          'text-error-600': error,
        }),
      [error, variant, label, open]
    )

    return (
      <div
        onKeyDown={handleKeyDown}
        ref={containerRef}
        className="flex relative items-center"
      >
        <Input
          className={className}
          label={label}
          variant={variant}
          onFocus={handleFocus}
          onClick={handleClick}
          onBlur={onBlur}
          name={name}
          value={inputValue?.toLocaleString(undefined, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          })}
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
              <div className="flex">
                <MonthCalendar
                  selected={inputValue}
                  onDateClick={handleDateClick}
                />
                <TimeCalendar
                  selected={inputValue}
                  onTimeClick={handleTimeClick}
                />
              </div>
            </div>
          </>
        ) : null}
      </div>
    )
  }
)

DateTimePicker.displayName = 'DateTimePicker'
export default DateTimePicker
