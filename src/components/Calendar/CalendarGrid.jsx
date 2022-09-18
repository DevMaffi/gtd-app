import PropTypes from 'prop-types'
import { default as Cell } from './CalendarCell'
import { usePrevDays, useDays, useNextDays } from 'hooks/useCalendar'
import { getEnvDate, compareDates } from 'utils/date'

function CalendarGrid({ date, tasks }) {
  const prevDays = usePrevDays(date)
  const days = useDays(date)
  const nextDays = useNextDays(date)

  const now = new Date(getEnvDate())
  const isCurrMonth = compareDates(date, now)

  const renderCells = (days, type) => {
    let monthInc = 0
    if (type) monthInc = type === 'prev' ? -1 : 1

    return days.map((d, i) => {
      let today = false
      if (isCurrMonth && !type) today = i === now.getDate() - 1

      const taskDueDate = new Date(
        date.getFullYear(),
        date.getMonth() + monthInc,
        d + 1
      )

      let completed = false
      if (taskDueDate.getTime() < now.getTime()) completed = true

      const cellId = new Date(
        date.getFullYear(),
        date.getMonth() + monthInc,
        d
      ).toDateString()

      return (
        <Cell
          key={d}
          dateNumber={d}
          tasks={tasks[cellId]}
          today={today}
          prev={type === 'prev'}
          next={type === 'next'}
          completed={completed}
        />
      )
    })
  }

  return (
    <div className="calendar__cells grid">
      {renderCells(prevDays, 'prev')}
      {renderCells(days)}
      {renderCells(nextDays, 'next')}
    </div>
  )
}

CalendarGrid.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  tasks: PropTypes.object.isRequired,
}

export default CalendarGrid
