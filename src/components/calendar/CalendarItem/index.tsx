import React from 'react'
import { CalendarDays, CalendarGrid } from 'components/calendar'
import { compareDates } from 'utils/date'
import { ITasksResponse } from 'model/interfaces'

export interface CalendarProps {
  date: Date
  tasks: ITasksResponse
  tasksUpdates: number
  loading: boolean
  tasksError: string
}

const Calendar: React.FC<CalendarProps> = ({
  tasksUpdates,
  tasksError,
  ...restProps
}) => {
  return (
    <div className="calendar__container">
      <CalendarDays />
      <CalendarGrid {...restProps} />
      {tasksError && <span>Error caused: {tasksError}</span>}
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
    prevProps.loading === nextProps.loading &&
    prevProps.tasksError === nextProps.tasksError
  )
}

export default React.memo<CalendarProps>(Calendar, calendarPropsAreEqual)
