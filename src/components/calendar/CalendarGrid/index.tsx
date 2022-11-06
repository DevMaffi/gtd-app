import { CalendarCell as Cell } from 'components/calendar'
import { Loader } from 'components/UI'
import { usePrevDays, useDays, useNextDays, useTypedSelector } from 'hooks'
import { getEnvDate, compareDates } from 'utils/date'
import './calendarGrid.sass'

export type CellType = 'prev' | 'next'

const CalendarGrid: React.FC = () => {
  const timestamp = useTypedSelector(state => state.date)
  const date = new Date(timestamp)

  const { tasks, areTasksLoading: loading } = useTypedSelector(
    state => state.task
  )

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
      const passed = taskDueDate.getTime() < now.getTime() && !today
      const cellId = taskDueDate.toDateString()

      return (
        <Cell
          key={d}
          dateNumber={d}
          tasks={tasks[cellId]}
          today={today}
          prev={type === 'prev'}
          next={type === 'next'}
          passed={passed}
        />
      )
    })
  }

  return (
    <div className="calendar__grid ">
      {loading && (
        <div className="calendar__grid-loader flex">
          <Loader />
        </div>
      )}
      <div className="calendar__grid-inner grid">
        {renderCells(prevDays, 'prev')}
        {renderCells(days)}
        {renderCells(nextDays, 'next')}
      </div>
    </div>
  )
}

export default CalendarGrid
