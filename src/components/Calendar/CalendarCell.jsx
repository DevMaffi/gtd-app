import PropTypes from 'prop-types'
import CalendarTasksList from './CalendarTasksList'

function CalendarCell({ dateNumber, tasks, prev, next, today, completed }) {
  const rootClasses = ['calendar__cell']

  if (!prev && !next) rootClasses.push('text-light')

  if (today) rootClasses.push('now')

  if (completed) rootClasses.push('completed')

  return (
    <div className={rootClasses.join(' ')}>
      <span>{dateNumber}</span>
      {tasks && <CalendarTasksList tasks={tasks} />}
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
