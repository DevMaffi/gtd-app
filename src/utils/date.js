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

export function compareDates(prevDate, nextDate) {
  return (
    prevDate.getDate() === nextDate.getDate() &&
    prevDate.getMonth() === nextDate.getMonth() &&
    prevDate.getFullYear() === nextDate.getFullYear()
  )
}
