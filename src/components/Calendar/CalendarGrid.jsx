import PropTypes from 'prop-types'
import { default as Cell } from './CalendarCell'
import { usePrevDays, useDays, useNextDays } from '../../hooks/useCalendar'

function CalendarGrid({ date }) {
  const prevDays = usePrevDays(date)
  const days = useDays(date)
  const nextDays = useNextDays(date)

  return (
    <div className="calendar__cells grid">
      {prevDays.map(d => (
        <Cell key={d} dateNumber={d} prev />
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

        return <Cell key={d} dateNumber={d} today={today} />
      })}
      {nextDays.map(d => (
        <Cell key={d} dateNumber={d} next />
      ))}
    </div>
  )
}

CalendarGrid.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
}

export default CalendarGrid
