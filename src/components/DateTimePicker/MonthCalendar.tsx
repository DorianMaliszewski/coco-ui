import clsx from 'clsx'
import { Fragment, useCallback, useMemo, useState } from 'react'
import { datesAreOnSameDay, datesOfMonthAndYear, daysOfWeek } from './helpers'
import React from 'react'
import Icon from '../Icon'
import Button from '../Button'

type MonthCalendarButtonProps = {
  date?: Date
  onDateClick?: (newDate: Date) => void
  selected?: Date
}
const MonthCalendarButton = ({
  date,
  selected,
  onDateClick,
}: MonthCalendarButtonProps) => {
  const isSelected =
    selected && date ? datesAreOnSameDay(selected, date) : false

  const buttonClassNames = clsx(
    'user-select-none appearance-none text-sm mb-2 h-6 w-6 rounded-full outline-none',
    {
      ['hover:bg-primary focus:bg-primary hover:text-primary-content focus:text-primary-content']:
        !isSelected,
      ['bg-primary text-primary-content']: isSelected,
    }
  )

  if (date)
    return (
      <button
        type="button"
        onClick={() => {
          onDateClick?.(date)
        }}
        className={buttonClassNames}
      >
        {date.getDate()}
      </button>
    )

  return <div className="mb-2 h-6 w-6" />
}

type MonthCalendarProps = {
  selected?: Date
  onDateClick?: (newDate: Date) => void
}

const MonthCalendar = ({
  selected,
  onDateClick,
}: MonthCalendarProps): JSX.Element => {
  const [dateView, setDateView] = useState(selected ?? new Date())

  const goPrevious = useCallback(() => {
    setDateView((current) => {
      current.setMonth(current.getMonth() - 1)
      return new Date(current)
    })
  }, [])

  const goNext = useCallback(() => {
    setDateView((current) => {
      current.setMonth(current.getMonth() + 1)
      return new Date(current)
    })
  }, [])

  const dates = useMemo(() => datesOfMonthAndYear(dateView), [dateView])

  const daysOfWeekStrings = useMemo(() => daysOfWeek(undefined), [])

  return (
    <div className="w-60">
      <div className="flex flex-col">
        <div className="h-12 bg-primary text-primary-content flex items-center justify-between">
          <Button
            aria-label="Previous"
            type="button"
            variant="ghost"
            onClick={goPrevious}
          >
            <Icon name="arrow-left" size={10} />
          </Button>
          <div className="text-center my-2">
            {dateView
              .toLocaleDateString(undefined, {
                month: 'long',
                year: 'numeric',
              })
              .toLocaleUpperCase()}
          </div>
          <Button
            aria-label="Next"
            type="button"
            variant="ghost"
            onClick={goNext}
          >
            <Icon name="arrow-right" size={10} />
          </Button>
        </div>
      </div>
      <div className="mt-2 mx-2 grid grid-cols-7 gap-2">
        {daysOfWeekStrings.map((dayString, dayIndex) => (
          <div
            key={`${dateView.getMonth()}-weekday-${dayIndex}`}
            className="text-gray-500 text-center"
          >
            {dayString}
          </div>
        ))}
        {dates.map((weekDates, weekIndex) => (
          <Fragment key={`${dateView.getMonth()}-weekday-${weekIndex}`}>
            {weekDates.map((date, index) => (
              <MonthCalendarButton
                key={`${dateView.getMonth()}-day-${index}`}
                date={date}
                selected={selected}
                onDateClick={onDateClick}
              />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default MonthCalendar
