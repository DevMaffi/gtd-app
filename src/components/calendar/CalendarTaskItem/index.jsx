import PropTypes from 'prop-types'
import './calendarTaskItem.sass'

function CalendarTaskItem({ task }) {
  return (
    <span className="calendar__task bg-container-light fs-300 text-light">
      {task.title}
    </span>
  )
}

CalendarTaskItem.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default CalendarTaskItem
