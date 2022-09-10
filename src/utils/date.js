const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export function getMonthName(monthIndex) {
  return months[monthIndex]
}

export function getDayName(dayIndex) {
  return days[dayIndex]
}

export function getDateString(date) {
  switch (date) {
    case 1:
      return `${date}st`
    case 2:
      return `${date}nd`
    case 3:
      return `${date}rd`
    default:
      return `${date}th`
  }
}
