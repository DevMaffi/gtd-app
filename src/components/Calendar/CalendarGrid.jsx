import { default as Cell } from './CalendarCell'
import { usePrevDays, useDays, useNextDays } from '../../hooks/useCalendar'

function CalendarGrid({ date }) {
  const prevDays = usePrevDays(date)
  const days = useDays(date)
  const nextDays = useNextDays(date)

  return (
    <div className="calendar__cells grid">
      {prevDays.map(d => (
        <Cell key={d} date={d} prev />
      ))}
      {days.map((d, i) => {
        const now = new Date()
        let today = false

        if (
          i === now.getDate() - 1 &&
          date.getMonth() === now.getMonth() &&
          date.getFullYear() === now.getFullYear()
        )
          today = true

        return <Cell key={d} date={d} today={today} />
      })}
      {nextDays.map(d => (
        <Cell key={d} date={d} next />
      ))}
    </div>
  )
}

export default CalendarGrid
