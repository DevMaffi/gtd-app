import React from 'react'
import { CalendarDays, CalendarGrid } from 'components/calendar'
import { ITasksResponse } from 'model/interfaces'

export interface CalendarProps {
  tasks: ITasksResponse
  loading: boolean
  tasksError: string
}

const Calendar: React.FC<CalendarProps> = ({ tasksError, ...restProps }) => {
  return (
    <div className="calendar__container">
      <CalendarDays />
      <CalendarGrid {...restProps} />
      {tasksError && <span>Error caused: {tasksError}</span>}
    </div>
  )
}

export default React.memo<CalendarProps>(Calendar)
