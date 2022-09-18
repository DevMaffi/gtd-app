import { CalendarHeader, CalendarItem } from 'components/calendar'

function CalendarView({ date, scrollHeader, tasks, tasksUpdates, onDate }) {
  return (
    <div className="calendar container">
      <CalendarHeader date={date} scrollHeader={scrollHeader} onDate={onDate} />
      <CalendarItem date={date} tasks={tasks} tasksUpdates={tasksUpdates} />
    </div>
  )
}

export default CalendarView
