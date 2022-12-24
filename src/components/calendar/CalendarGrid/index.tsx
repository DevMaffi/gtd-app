import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { CalendarCell as Cell } from 'components/calendar'
import { Loader } from 'components/UI'
import { usePrevDays, useDays, useNextDays, useTypedSelector } from 'hooks'
import { getEnvDate, compareDates } from 'utils/date'
import { ITasksResponse } from 'model/interfaces'
import './calendarGrid.sass'

export type CellType = 'prev' | 'next'

const CalendarGrid: React.FC = () => {
  const selectGridData = createSelector(
    (state: RootState): number => state.date.timestamp,
    (state: RootState): boolean => state.task.areTasksLoading,
    (state: RootState): ITasksResponse => state.task.tasks,
    (timestamp, areTasksLoading, tasks) => ({
      date: new Date(timestamp),
      loading: areTasksLoading,
      tasks,
    })
  )

  const { date, tasks, loading } = useTypedSelector(selectGridData)

  const prevDays = usePrevDays(date)
  const days = useDays(date)
  const nextDays = useNextDays(date)

  const now = new Date(getEnvDate())

  let isTodaySet = false

  const renderCells = (days: number[], type?: CellType): JSX.Element[] => {
    let monthInc = 0
    if (type) monthInc = type === 'prev' ? -1 : 1

    return days.map(d => {
      const taskDueDate = new Date(
        date.getFullYear(),
        date.getMonth() + monthInc,
        d
      )

      let today = false
      if (!isTodaySet) today = compareDates(taskDueDate, now)

      const overdue = !today && taskDueDate.getTime() < now.getTime()
      const dueDateId = taskDueDate.toDateString()

      return (
        <Cell
          key={dueDateId}
          dueDate={dueDateId}
          dateNumber={d}
          attachedTasks={tasks[dueDateId]}
          today={today}
          prev={type === 'prev'}
          next={type === 'next'}
          overdue={overdue}
        />
      )
    })
  }

  return (
    <div className="calendar__grid">
      <Loader isActive={loading} />
      <div className="calendar__grid-inner grid">
        {renderCells(prevDays, 'prev')}
        {renderCells(days)}
        {renderCells(nextDays, 'next')}
      </div>
    </div>
  )
}

export default CalendarGrid
