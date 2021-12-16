import Select, { SelectOptionType } from '../Select'
import React, { forwardRef, useMemo } from 'react'

export type TimePickerProps = {
  value?: string
  className?: string
  disabled?: boolean
  id?: string
  error?: boolean
  step?: number
  onChange?: (value: string) => void
  label?: string
  variant?: 'inside' | 'outside'
  locales?: string
  required?: boolean
}

const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  (
    {
      value,
      className,
      disabled,
      error,
      id,
      step = 30,
      onChange,
      label,
      variant,
      locales,
      required,
    },
    ref
  ) => {
    const options = useMemo(() => {
      const array: SelectOptionType[] = []
      const base = new Date()
      base.setHours(0)
      base.setMinutes(0)
      const end = new Date()
      end.setHours(23)
      end.setMinutes(59)
      while (base < end) {
        let str = ''
        try {
          str = `${new Intl.DateTimeFormat(locales, {
            hour: '2-digit',
            minute: '2-digit',
          }).format(base)}`
        } catch {
          str = `${new Intl.DateTimeFormat(undefined, {
            hour: '2-digit',
            minute: '2-digit',
          }).format(base)}`
        }
        array.push({
          label: str,
          value: str,
        })
        base.setMinutes(base.getMinutes() + step)
      }

      return array
    }, [step, locales])
    return (
      <Select
        options={options}
        value={value}
        onChange={(value) => {
          onChange?.(value as string)
        }}
        disabled={disabled}
        id={id}
        error={error}
        className={className}
        label={label}
        variant={variant}
        ref={ref}
        required={required}
      />
    )
  }
)

TimePicker.displayName = 'TimePicker'

export default TimePicker
