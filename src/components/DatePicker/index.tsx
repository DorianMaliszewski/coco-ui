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
import Button from '../Button'
import Icon from '../Icon'
import useClickOutsideHandler from '../../hooks/useClickOutsideHandler'
import { datesAreOnSameDay, datesOfMonthAndYear, daysOfWeek } from './helpers'

type CalendarProps = {
  selected?: Date
  onDateClick?: (newDate: Date) => void
}

const Calendar = ({ selected, onDateClick }: CalendarProps): JSX.Element => {
  const [dateView, setDateView] = useState(selected ?? new Date())

  const goPrevious = useCallback(() => {
    setDateView((current) => {
      current.setMonth(current.getMonth() - 1)
      return new Date(current.getTime())
    })
  }, [])

  const goNext = useCallback(() => {
    setDateView((current) => {
      current.setMonth(current.getMonth() + 1)
      return new Date(current.getTime())
    })
  }, [])

  const goToday = useCallback(() => {
    setDateView(new Date())
  }, [])

  const dates = useMemo(() => datesOfMonthAndYear(dateView), [dateView])

  const daysOfWeekStrings = useMemo(() => daysOfWeek(undefined), [])

  const isSelected = useCallback(
    (dateToTest: Date) =>
      selected ? datesAreOnSameDay(selected, dateToTest) : false,
    [selected]
  )

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <Button variant="secondary" onClick={goPrevious}>
            <Icon name="arrow-left" size={10} />
          </Button>
          <Button onClick={goToday} variant="link" size="xs" className="mx-2">
            Aujourd&apos;hui
          </Button>
          <Button variant="secondary" onClick={goNext}>
            <Icon name="arrow-right" size={10} />
          </Button>
        </div>
        <div className="text-center my-2">
          {dateView
            .toLocaleDateString(undefined, {
              month: 'long',
              year: 'numeric',
            })
            .toLocaleUpperCase()}
        </div>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {Object.entries(dates).map(([dayIndex, dates]) => (
          <section
            key={dayIndex}
            className="text-center flex flex-col items-center w-6"
          >
            <div className="text-gray-500 mb-2">
              {daysOfWeekStrings[dayIndex as keyof typeof daysOfWeekStrings]}
            </div>
            {dates.map((date, index) =>
              date ? (
                <button
                  onClick={() => {
                    onDateClick?.(date)
                  }}
                  className={classNames(
                    'appearance-none text-sm mb-2 h-6 w-6 rounded-full',
                    {
                      ['hover:bg-primary-100 hover:text-primary-700']: !isSelected(
                        date
                      ),
                      ['bg-primary-100 text-primary-700']: isSelected(date),
                    }
                  )}
                  key={date.getTime()}
                >
                  {date.getDate()}
                </button>
              ) : (
                <div key={`empty-${index}`} className="mb-2 h-6 w-6" />
              )
            )}
          </section>
        ))}
      </div>
    </>
  )
}

export type DatePickerProps = {
  name?: string
  value?: Date
  onChange?: (newValue: Date) => void
  onBlur?: FocusEventHandler<HTMLInputElement>
  className?: string
  label?: string
  variant?: 'inside' | 'outside'
}

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ name, value, onChange, onBlur, label, variant, className }, ref) => {
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
      setOpen(true)
    }, [])

    const handleDateClick = useCallback((newDate) => {
      onChange?.(newDate)
      setOpen(false)
    }, [])

    const containerClassNames = useMemo(
      () =>
        classNames({
          ['absolute top-full shadow p-2 w-max']: true,
          ['sr-only']: !open,
        }),
      [open]
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
        />
        <Icon
          name="calendar"
          type="outline"
          size={18}
          className="absolute right-2"
        />
        <div className={containerClassNames}>
          <Calendar selected={value} onDateClick={handleDateClick} />
        </div>
      </div>
    )
  }
)

DatePicker.displayName = 'DatePicker'
export default DatePicker
