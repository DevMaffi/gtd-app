const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

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
