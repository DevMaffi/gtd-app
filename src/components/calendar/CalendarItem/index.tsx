import React from 'react'
import { CalendarDays, CalendarGrid } from 'components/calendar'
import { useTypedSelector } from 'hooks'

const Calendar: React.FC = () => {
  const tasksError = useTypedSelector(state => state.task.tasksError)

  return (
    <div className="calendar__container">
      <CalendarDays />
      <CalendarGrid />
      {tasksError && <span>Error caused: {tasksError}</span>}
    </div>
  )
}

export default React.memo(Calendar)
