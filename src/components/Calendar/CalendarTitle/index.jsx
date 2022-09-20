import PropTypes from 'prop-types'
import { Heading, Button } from 'components/UI'
import { getEnvDate, getDayName, getDateString, compareDates } from 'utils/date'
import RootClasses from 'utils/rootClasses'
import './calendarTitle.sass'

function CalendarTitle({ date, onDate }) {
  let isNow = false

  const now = new Date(getEnvDate())
  const rootClasses = new RootClasses('calendar__title')
  const today = {
    day: getDayName(now.getDay()),
    date: getDateString(now.getDate()),
  }

  const jumpBack = () => onDate(now)

  if (compareDates(date, now)) isNow = true
  else
    rootClasses.add({
      condition: true,
      type: 'showPill',
      className: 'show-pill',
    })

  return (
    <div className={rootClasses.toClassNameString()}>
      {!isNow && (
        <div className="calendar__title-back">
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
