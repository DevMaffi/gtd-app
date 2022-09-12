import Calendar, { CalendarHeader } from './Calendar'

function CalendarView({ date, onDate }) {
  return (
    <div className="calendar container">
      <CalendarHeader date={date} onDate={onDate} />
      <Calendar date={date} />
    </div>
  )
}

export default CalendarView
