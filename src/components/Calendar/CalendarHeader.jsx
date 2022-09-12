import CalendarTitle from './CalendarTitle'
import MonthSelector from '../MonthSelector'
import { Button } from '../UI'

function CalendarHeader({ date, onDate }) {
  return (
    <header className="calendar__header flex">
      <div className="calendar__header-date grid">
        <CalendarTitle date={date} onDate={onDate} />
        <MonthSelector date={date} onDate={onDate} />
      </div>
      <Button ripple>+</Button>
    </header>
  )
}

export default CalendarHeader
