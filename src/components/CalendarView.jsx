import Calendar, { CalendarHeader } from './Calendar'

function CalendarView({ date, tasks, onDate }) {
  return (
    <div className="calendar container">
      <CalendarHeader date={date} onDate={onDate} />
      <Calendar date={date} tasks={tasks} />
    </div>
  )
}

export default CalendarView
