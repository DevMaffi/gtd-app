import PropTypes from 'prop-types'
import { Heading, Button } from '../UI'
import { useToday } from '../../hooks/useToday'
import { compareDates } from '../../utils/date'

function CalendarTitle({ date, onDate }) {
  const today = useToday()

  let isNow = false
  const now = new Date()
  const rootClasses = ['calendar__title']

  const jumpBack = () => onDate(new Date())

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
