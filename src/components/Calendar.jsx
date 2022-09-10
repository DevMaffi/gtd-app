import { useMemo } from 'react'
import MonthSelector from './MonthSelector'
import { Heading, Button } from './UI'
import { getDayName, getDateString } from '../utils/date'

function Calendar({ date, onDate }) {
  const today = useMemo(() => {
    const now = new Date()

    return {
      day: getDayName(now.getDay()).slice(0, 3),
      date: getDateString(now.getDate()),
    }
  }, [])

  const days = useMemo(() => {
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate()

    let daysArr = []

    for (let i = 0; i < lastDay; i++) {
      daysArr.push(i + 1)
    }

    return daysArr
  }, [date])

  const prevDays = useMemo(() => {
    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate()

    const firstDayIndex = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay()

    let prevDaysArr = []

    if (firstDayIndex === 0) {
      for (let i = 7; i > 1; i--) {
        prevDaysArr.push(prevLastDay - i + 2)
      }

      return prevDaysArr
    }

    for (let i = firstDayIndex; i > 1; i--) {
      prevDaysArr.push(prevLastDay - i + 2)
    }

    return prevDaysArr
  }, [date])

  const nextDays = useMemo(() => {
    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay()

    let nextDaysArr = []

    if (lastDayIndex === 0) return nextDaysArr

    for (let i = 0; i < 7 - lastDayIndex; i++) {
      nextDaysArr.push(i + 1)
    }

    return nextDaysArr
  }, [date])

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
      <div className="calendar__days flex">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fir', 'Sat', 'Sun'].map(m => (
          <div key={m} className="calendar__day bg-container-light fs-600">
            {m}
          </div>
        ))}
      </div>
      <div className="calendar__cells grid">
        {prevDays.map(d => (
          <div key={d} className="calendar__cell">
            {d}
          </div>
        ))}
        {days.map((d, i) => {
          const now = new Date()
          const rootClasses = ['calendar__cell', 'text-light']

          if (
            i === now.getDate() - 1 &&
            date.getMonth() === now.getMonth() &&
            date.getFullYear() === now.getFullYear()
          )
            rootClasses.push('calendar__cell--now')

          return (
            <div key={d} className={rootClasses.join(' ')}>
              <span>{d}</span>
            </div>
          )
        })}
        {nextDays.map(d => (
          <div key={d} className="calendar__cell">
            {d}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
