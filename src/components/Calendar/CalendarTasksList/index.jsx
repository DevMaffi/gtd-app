import PropTypes from 'prop-types'
import './calendarTasks.sass'

function CalendarTasksList({ tasks }) {
  return (
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
  )
}

CalendarTasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
      title: PropTypes.string,
    })
  ).isRequired,
}

export default CalendarTasksList
