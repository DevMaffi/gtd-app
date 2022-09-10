import { useMemo } from 'react'
import MonthSelector from './MonthSelector'
import { Calendar } from './Calendar'
import { Heading, Button } from './UI'
import { getDayName, getDateString } from '../utils/date'

function CalendarView({ date, onDate }) {
  const today = useMemo(() => {
    const now = new Date()

    return {
      day: getDayName(now.getDay()).slice(0, 3),
      date: getDateString(now.getDate()),
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
      <Calendar date={date} />
    </div>
  )
}

export default CalendarView
