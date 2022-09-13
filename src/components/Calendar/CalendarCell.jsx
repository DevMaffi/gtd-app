import PropTypes from 'prop-types'

function CalendarCell({ dateNumber, prev, next, today }) {
  const rootClasses = ['calendar__cell']

  if (!prev && !next) rootClasses.push('text-light')

  if (today) rootClasses.push('calendar__cell--now')

  return (
    <div className={rootClasses.join(' ')}>
      <span>{dateNumber}</span>
    </div>
  )
}

CalendarCell.propTypes = {
  dateNumber: PropTypes.number.isRequired,
  prev: PropTypes.bool,
  next: PropTypes.bool,
  today: PropTypes.bool,
}

export default CalendarCell
