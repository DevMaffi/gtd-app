import { useMemo } from 'react'
import MonthSelector from './MonthSelector'
import { Heading, Button } from './UI'
import { getDayName, getDateString } from '../utils/date'

function Calendar({ date, onDate }) {
  const today = useMemo(() => {
    return {
      day: getDayName(date.getDay()).slice(0, 3),
      date: getDateString(date.getDate()),
    }
  }, [])

  return (
    <div className="calendar container">
      <header className="calendar__header flex">
        <Heading className="calendar__date">
          Today is {today.day}, <span>{today.date}</span>
        </Heading>
        <MonthSelector date={date} onDate={onDate} />
        <Button className="calendar__add" type="button">
          +
        </Button>
      </header>
    </div>
  )
}

export default Calendar
