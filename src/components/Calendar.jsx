import { Heading, Button } from './UI'

function Calendar() {
  return (
    <div className="calendar container">
      <header className="calendar__header flex">
        <Heading className="calendar__month">
          September <span>2022</span>
        </Heading>
        <div className="calendar__date flex">
          <Button arrow>
            <i className="ri-arrow-left-s-line"></i>
          </Button>
          <Button>Today</Button>
          <Button arrow>
            <i className="ri-arrow-right-s-line"></i>
          </Button>
        </div>
        <Button className="calendar__add" type="button">
          +
        </Button>
      </header>
    </div>
  )
}

export default Calendar
