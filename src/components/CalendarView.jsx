import MonthSelector from './MonthSelector'
import { Calendar } from './Calendar'
import { Heading, Button } from './UI'
import { useToday } from '../hooks/useToday'

function CalendarView({ date, onDate }) {
  const today = useToday()

  return (
    <div className="calendar container">
      <header className="calendar__header flex">
        <Heading className="calendar__date">
          Today is {today.day}, <span>{today.date}</span>
        </Heading>
        <MonthSelector date={date} onDate={onDate} />
        <Button className="calendar__add" ripple>
          +
        </Button>
      </header>
      <Calendar date={date} />
    </div>
  )
}

export default CalendarView
