import PropTypes from 'prop-types'
import { CalendarCell as Cell } from 'components/calendar'
import { usePrevDays, useDays, useNextDays } from 'hooks'
import { getEnvDate, compareDates } from 'utils/date'
import './calendarGrid.sass'

function CalendarGrid({ date, tasks }) {
  const prevDays = usePrevDays(date)
  const days = useDays(date)
  const nextDays = useNextDays(date)

  const now = new Date(getEnvDate())
  const isCurrMonth = compareDates(date, now)

  const renderCells = (days, type) => {
    let monthInc = 0
    if (type) monthInc = type === 'prev' ? -1 : 1

    return days.map(d => {
      let today = false
      if (isCurrMonth && !type) today = d === now.getDate()

      const taskDueDate = new Date(
        date.getFullYear(),
        date.getMonth() + monthInc,
        d
      )

      let completed = false
      if (taskDueDate.getTime() < now.getTime()) completed = true

      const cellId = taskDueDate.toDateString()

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
    <div className="calendar__grid grid">
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
