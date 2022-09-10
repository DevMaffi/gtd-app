function CalendarCell({ date, prev, next, today }) {
  const rootClasses = ['calendar__cell']

  if (!prev && !next) rootClasses.push('text-light')

  if (today) rootClasses.push('calendar__cell--now')

  return (
    <div className={rootClasses.join(' ')}>
      <span>{date}</span>
    </div>
  )
}

export default CalendarCell
