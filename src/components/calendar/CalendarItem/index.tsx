import React from 'react'
import { CalendarDays, CalendarGrid } from 'components/calendar'
import { compareDates } from 'utils/date'
import { TasksResponse } from 'model/interfaces'

export interface CalendarProps {
  date: Date
  tasks: TasksResponse
  tasksUpdates: number
  loading: boolean
}

const Calendar: React.FC<CalendarProps> = ({
  tasksUpdates,
  loading,
  ...restProps
}) => {
  return (
    <div className="calendar__container">
      <CalendarDays />
      <CalendarGrid {...restProps} />
      {loading && <span>Loading...</span>}
    </div>
  )
}

function calendarPropsAreEqual(
  prevProps: CalendarProps,
  nextProps: CalendarProps
): boolean {
  return (
    compareDates(prevProps.date, nextProps.date) &&
    prevProps.tasksUpdates === nextProps.tasksUpdates &&
    prevProps.loading === nextProps.loading
  )
}

export default React.memo<CalendarProps>(Calendar, calendarPropsAreEqual)
