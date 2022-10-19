import PropTypes from 'prop-types'
import { CalendarTaskItem } from 'components/calendar'
import './calendarTasks.sass'

function CalendarTasksList({ tasks }) {
  return (
    <div className="calendar__tasks grid">
      {tasks.slice(0, 3).map(t => (
        <CalendarTaskItem key={t._id} task={t} />
      ))}
    </div>
  )
}

CalendarTasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default CalendarTasksList
