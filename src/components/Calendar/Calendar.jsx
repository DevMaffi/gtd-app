import React from 'react'
import PropTypes from 'prop-types'
import CalendarDays from './CalendarDays'
import CalendarGrid from './CalendarGrid'
import { compareDates } from '../../utils/date'

function Calendar({ date }) {
  return (
    <>
      <CalendarDays />
      <CalendarGrid date={date} />
    </>
  )
}

function calendarPropsAreEqual(prevProps, nextProps) {
  return compareDates(prevProps.date, nextProps.date)
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
}

export default React.memo(Calendar, calendarPropsAreEqual)
