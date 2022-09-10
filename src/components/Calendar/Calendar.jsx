import CalendarDays from './CalendarDays'
import CalendarGrid from './CalendarGrid'

function Calendar({ date }) {
  return (
    <>
      <CalendarDays />
      <CalendarGrid date={date} />
    </>
  )
}

export default Calendar
