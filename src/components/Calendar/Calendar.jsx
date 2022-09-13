import React from 'react'
import CalendarDays from './CalendarDays'
import CalendarGrid from './CalendarGrid'

function Calendar({ date }) {
  return (
    <>
      <CalendarDays />
      <CalendarGrid date={date} />
    </>
  )
}

function calendarPropsAreEqual(prevProps, nextProps) {
  return (
    prevProps.date.getDate() === nextProps.date.getDate() &&
    prevProps.date.getMonth() === nextProps.date.getMonth() &&
    prevProps.date.getFullYear() === nextProps.date.getFullYear()
  )
}

export default React.memo(Calendar, calendarPropsAreEqual)
