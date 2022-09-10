import { useMemo } from 'react'
import { Button } from './UI'
import { getMonthName } from '../utils/date'

function MonthSelector({ date, onDate }) {
  const month = useMemo(() => getMonthName(date.getMonth()).slice(0, 3), [date])

  const changeMonth = inc => {
    onDate(new Date(date.getFullYear(), date.getMonth() + inc, date.getDate()))
  }

  return (
    <div className="calendar__month flex">
      <Button onClick={() => changeMonth(-1)} arrow>
        <i className="ri-arrow-left-s-line"></i>
      </Button>
      <Button className="calendar__dropdown">
        {month} {date.getFullYear()}
      </Button>
      <Button onClick={() => changeMonth(1)} arrow>
        <i className="ri-arrow-right-s-line"></i>
      </Button>
    </div>
  )
}

export default MonthSelector
