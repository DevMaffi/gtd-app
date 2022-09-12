import Calendar, { CalendarTitle } from './Calendar'
import MonthSelector from './MonthSelector'
import { Button } from './UI'

function CalendarView({ date, onDate }) {
  return (
    <div className="calendar container">
      <header className="calendar__header flex">
        <div className="calendar__header-date grid">
          <CalendarTitle date={date} onDate={onDate} />
          <MonthSelector date={date} onDate={onDate} />
        </div>
        <Button ripple>+</Button>
      </header>
      <Calendar date={date} />
    </div>
  )
}

export default CalendarView
