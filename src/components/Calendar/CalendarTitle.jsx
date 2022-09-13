import PropTypes from 'prop-types'
import { Heading, Button } from '../UI'
import { getDateString, compareDates } from '../../utils/date'
import data from '../../data.json'

function CalendarTitle({ date, onDate }) {
  const now = new Date()
  const days = data.shortenings.days
  const today = {
    day: now.getDay() === 0 ? days[days.length - 1] : days[now.getDay() - 1],
    date: getDateString(now.getDate()),
  }

  let isNow = false
  const rootClasses = ['calendar__title']

  const jumpBack = () => onDate(now)

  if (compareDates(date, now)) isNow = true
  else rootClasses.push('show-pill')

  return (
    <div className={rootClasses.join(' ')}>
      {!isNow && (
        <div className="calendar__back">
          <Button onClick={jumpBack} pill>
            <i className="ri-arrow-go-back-line"></i>
            jump back
          </Button>
        </div>
      )}
      <Heading>
        Today is {today.day}, <span>{today.date}</span>
      </Heading>
    </div>
  )
}

CalendarTitle.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onDate: PropTypes.func.isRequired,
}

export default CalendarTitle
