import CalendarTitle from './CalendarTitle'
import MonthSelector from '../MonthSelector'
import { Button } from '../UI'

function CalendarHeader(props) {
  return (
    <header className="calendar__header flex">
      <div className="calendar__header-date grid">
        <CalendarTitle {...props} />
        <MonthSelector {...props} />
      </div>
      <Button ripple>+</Button>
    </header>
  )
}

export default CalendarHeader
