import React from 'react'
import { CalendarDays, CalendarGrid } from 'components/calendar'
import { compareDates } from 'utils/date'
import { TasksResponse } from 'model/interfaces'

export interface CalendarProps {
  date: Date
  tasks: TasksResponse
  tasksUpdates: number
}

const Calendar: React.FC<CalendarProps> = ({ tasksUpdates, ...restProps }) => {
  return (
    <div className="calendar__container">
      <CalendarDays />
      <CalendarGrid {...restProps} />
    </div>
  )
}

function calendarPropsAreEqual(
  prevProps: CalendarProps,
  nextProps: CalendarProps
): boolean {
  return (
    compareDates(prevProps.date, nextProps.date) &&
    prevProps.tasksUpdates === nextProps.tasksUpdates
  )
}

export default React.memo<CalendarProps>(Calendar, calendarPropsAreEqual)
