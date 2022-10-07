import PropTypes from 'prop-types'
import { CalendarTasksList } from 'components/calendar'
import RootClasses from 'utils/rootClasses'
import './calendarCell.sass'

function CalendarCell({ dateNumber, tasks, prev, next, today, completed }) {
  const rootClasses = new RootClasses('calendar__cell')
    .add({
      condition: !prev && !next,
      type: 'curr',
      className: 'text-light',
    })
    .add({
      condition: today,
      type: 'today',
      className: 'now',
    })
    .add({
      condition: completed,
      type: 'completed',
      className: 'completed',
    })

  return (
    <div className={rootClasses.toClassNameString()}>
      <span>{dateNumber}</span>
      {tasks && <CalendarTasksList tasks={tasks} />}
    </div>
  )
}

CalendarCell.propTypes = {
  dateNumber: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  prev: PropTypes.bool,
  next: PropTypes.bool,
  today: PropTypes.bool,
  completed: PropTypes.bool,
}

export default CalendarCell
