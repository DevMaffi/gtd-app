import React from 'react'
import PropTypes from 'prop-types'
import CalendarDays from './CalendarDays'
import CalendarGrid from './CalendarGrid'
import { compareDates } from '../../utils/date'

function Calendar(props) {
  return (
    <>
      <CalendarDays />
      <CalendarGrid {...props} />
    </>
  )
}

function calendarPropsAreEqual(prevProps, nextProps) {
  return (
    compareDates(prevProps.date, nextProps.date) &&
    JSON.stringify(prevProps.tasks) === JSON.stringify(nextProps.tasks)
  )
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  tasks: PropTypes.object.isRequired,
}

export default React.memo(Calendar, calendarPropsAreEqual)
