import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { CalendarCell as Cell } from 'components/calendar'
import { Loader } from 'components/UI'
import { usePrevDays, useDays, useNextDays, useTypedSelector } from 'hooks'
import { getEnvDate, compareDates } from 'utils/date'
import './calendarGrid.sass'

export type CellType = 'prev' | 'next'

const CalendarGrid: React.FC = () => {
  const selectGridData = createSelector(
    (state: RootState): number => state.date.timestamp,
    (state: RootState): boolean => state.task.areTasksLoading,
    (timestamp, areTasksLoading) => ({
      date: new Date(timestamp),
      loading: areTasksLoading,
    })
  )

  const { date, loading } = useTypedSelector(selectGridData)

  const prevDays = usePrevDays(date)
  const days = useDays(date)
  const nextDays = useNextDays(date)

  const now = new Date(getEnvDate())

  const renderCells = (days: number[], type?: CellType): JSX.Element[] => {
    let monthInc = 0
    if (type) monthInc = type === 'prev' ? -1 : 1

    return days.map(d => {
      const taskDueDate = new Date(
        date.getFullYear(),
        date.getMonth() + monthInc,
        d
      )

      const today = compareDates(taskDueDate, now)
      const overdue = taskDueDate.getTime() < now.getTime() && !today
      const dueDateId = taskDueDate.toDateString()

      return (
        <Cell
          key={d}
          dueDate={dueDateId}
          dateNumber={d}
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
