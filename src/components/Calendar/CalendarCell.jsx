import PropTypes from 'prop-types'

function CalendarCell({ dateNumber, tasks, prev, next, today, completed }) {
  const rootClasses = ['calendar__cell']

  if (!prev && !next) rootClasses.push('text-light')

  if (today) rootClasses.push('now')

  if (completed) rootClasses.push('completed')

  return (
    <div className={rootClasses.join(' ')}>
      <span>{dateNumber}</span>
      {tasks && (
        <div className="calendar__tasks grid">
          {tasks.slice(0, 3).map(t => (
            <span
              key={t._id}
              className="calendar__task bg-container-light fs-300 text-light"
            >
              {t.title}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

CalendarCell.propTypes = {
  dateNumber: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
  prev: PropTypes.bool,
  next: PropTypes.bool,
  today: PropTypes.bool,
  completed: PropTypes.bool,
}

export default CalendarCell
