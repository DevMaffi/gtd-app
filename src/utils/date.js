import data from 'data.json'

export function getEnvDate() {
  if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_DATE)
    return new Date(process.env.REACT_APP_DATE)

  return new Date()
}

export function getDayName(dayIndex) {
  const { days } = data.shortenings

  if (dayIndex === 0) return days[days.length - 1]
  return days[dayIndex - 1]
}

export function getDateString(date) {
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

export function compareDates(prevDate, nextDate) {
  return (
    prevDate.getDate() === nextDate.getDate() &&
    prevDate.getMonth() === nextDate.getMonth() &&
    prevDate.getFullYear() === nextDate.getFullYear()
  )
}
