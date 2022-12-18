import data from 'data.json'

export const getEnvDate = (): Date => {
  if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_DATE)
    return new Date(process.env.REACT_APP_DATE)

  return new Date()
}

export const getShortDayName = (dayIndex: number): string => {
  const { days } = data

  if (dayIndex === 0) return days[days.length - 1].abbr
  return days[dayIndex - 1].abbr
}

export const getDateString = (date: number): string => {
  switch (date) {
    case 1:
    case 21:
    case 31:
      return `${date}st`

    case 2:
    case 22:
      return `${date}nd`

    case 3:
    case 23:
      return `${date}rd`

    default:
      return `${date}th`
  }
}

export const compareDates = (prevDate: Date, nextDate: Date): boolean => {
  return (
    prevDate.getDate() === nextDate.getDate() &&
    prevDate.getMonth() === nextDate.getMonth() &&
    prevDate.getFullYear() === nextDate.getFullYear()
  )
}
