import Date from './Date'
import { Heading, Button } from './UI'

function Calendar() {
  return (
    <div className="calendar container">
      <header className="calendar__header flex">
        <Heading className="calendar__month">
          September <span>2022</span>
        </Heading>
        <Date />
        <Button className="calendar__add" type="button">
          +
        </Button>
      </header>
    </div>
  )
}

export default Calendar
