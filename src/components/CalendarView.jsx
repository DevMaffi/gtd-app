import Calendar, { CalendarHeader } from './Calendar'

function CalendarView({ date, scrollHeader, tasks, tasksUpdates, onDate }) {
  return (
    <div className="calendar container">
      <CalendarHeader date={date} scrollHeader={scrollHeader} onDate={onDate} />
      <Calendar date={date} tasks={tasks} tasksUpdates={tasksUpdates} />
    </div>
  )
}

export default CalendarView
