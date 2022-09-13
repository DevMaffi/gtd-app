import PropTypes from 'prop-types'
import { default as Cell } from './CalendarCell'
import { usePrevDays, useDays, useNextDays } from '../../hooks/useCalendar'
import { compareDates } from '../../utils/date'

function CalendarGrid({ date }) {
  const prevDays = usePrevDays(date)
  const days = useDays(date)
  const nextDays = useNextDays(date)

  const now = new Date()
  const isCurrMonth = compareDates(date, now)

  return (
    <div className="calendar__cells grid">
      {prevDays.map(d => (
        <Cell key={d} dateNumber={d} prev />
      ))}
      {days.map((d, i) => {
        let today = false
        if (isCurrMonth) today = i === now.getDate() - 1

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
