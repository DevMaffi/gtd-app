import React from 'react'
import PropTypes from 'prop-types'
import CalendarDays from './CalendarDays'
import CalendarGrid from './CalendarGrid'
import { compareDates } from '../../utils/date'

function Calendar({ tasksUpdates, ...restProps }) {
  return (
    <>
      <CalendarDays />
      <CalendarGrid {...restProps} />
    </>
  )
}

function calendarPropsAreEqual(prevProps, nextProps) {
  return (
    compareDates(prevProps.date, nextProps.date) &&
    prevProps.tasksUpdates === nextProps.tasksUpdates
  )
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  tasks: PropTypes.object.isRequired,
  tasksUpdates: PropTypes.number.isRequired,
}

export default React.memo(Calendar, calendarPropsAreEqual)
