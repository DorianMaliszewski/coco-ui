/**
 * @param localeName Locale Intl
 * @returns Array of weekdays
 */
export const daysOfWeek = (localeName?: string): Array<string> => {
  let format = new Intl.DateTimeFormat(undefined, { weekday: 'narrow' }).format
  try {
    format = new Intl.DateTimeFormat(localeName, { weekday: 'narrow' }).format
    return Array.from({ length: 7 }, (_, index) => index).map((day) =>
      format(new Date(Date.UTC(2021, 5, day)))
    )
  } catch {
    return Array.from({ length: 7 }, (_, index) => index).map((day) =>
      format(new Date(Date.UTC(2021, 5, day)))
    )
  }
}

/**
 * @param year Year of date
 * @param month Month of date
 * @returns The number of week in a month
 */
export const weekCountInMonth = (year: number, month: number): number => {
  const firstDay = new Date(year, month, 1).getDay()
  const totalDays = new Date(year, month + 1, 0).getDate()
  return Math.ceil((firstDay + totalDays) / 7)
}

/**
 * @param date Teh date to search
 * @returns The week number in month of the date
 */
export const weekOfDate = (date: Date): number => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 0).getDay()
  return Math.ceil((firstDay + date.getDate()) / 7)
}

/**
 * Return an object of weekday index with dates array
 * @param date Base date in month and year
 * @returns Object of weekday index with an array of Dates (undefined if a Date is not present in the weekday in the month)
 */
export const datesOfMonthAndYear = (
  date: Date
): Array<Array<Date | undefined>> => {
  const maxWeekNumber = 6
  const numberOfDay = 7

  const daysInWeekDay = Array.from({ length: maxWeekNumber }, () =>
    Array.from({ length: numberOfDay }, () => undefined)
  ) as Array<Array<Date | undefined>>

  const baseDate = new Date(date.getFullYear(), date.getMonth(), 1)
  while (baseDate.getMonth() === date.getMonth()) {
    const localDate = new Date(baseDate)
    daysInWeekDay[weekOfDate(localDate) - 1][
      localDate.getDay() === 0 ? 6 : localDate.getDay() - 1
    ] = localDate
    baseDate.setDate(localDate.getDate() + 1)
  }
  return daysInWeekDay
}

/**
 * Test if two dates is the same day
 * @param first First date
 * @param second Second date
 * @returns True if both dates are the same day
 */
export const datesAreOnSameDay = (first: Date, second: Date): boolean =>
  first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate()
