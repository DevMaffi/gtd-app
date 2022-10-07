import React from 'react'
import PropTypes from 'prop-types'
import { CalendarDays, CalendarGrid } from 'components/calendar'
import { compareDates } from 'utils/date'

function CalendarItem({ tasksUpdates, ...restProps }) {
  return (
    <div className="calendar__container">
      <CalendarDays />
      <CalendarGrid {...restProps} />
    </div>
  )
}

function calendarPropsAreEqual(prevProps, nextProps) {
  return (
    compareDates(prevProps.date, nextProps.date) &&
    prevProps.tasksUpdates === nextProps.tasksUpdates
  )
}

CalendarItem.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  tasks: PropTypes.object.isRequired,
  tasksUpdates: PropTypes.number.isRequired,
}

export default React.memo(CalendarItem, calendarPropsAreEqual)
