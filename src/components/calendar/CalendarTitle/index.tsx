import classNames from 'classnames'
import { Heading, Button } from 'components/UI'
import { useActions, useStateDate } from 'hooks'
import {
  getEnvDate,
  getShortDayName,
  getDateString,
  compareDates,
} from 'utils/date'
import './calendarTitle.sass'

const CalendarTitle: React.FC = () => {
  const date = useStateDate()

  const { changeDate } = useActions()

  const now = new Date(getEnvDate())
  const today = {
    day: getShortDayName(now.getDay()),
    date: getDateString(now.getDate()),
  }
  const isNow = compareDates(date, now)

  const titleClasses = classNames('calendar__title', {
    'show-pill': !isNow,
  })

  const jumpBack = (): void => {
    changeDate(now.getTime())
  }

  return (
    <div className={titleClasses}>
      {!isNow && (
        <div className="calendar__title-back">
          <Button onClick={jumpBack} variant="pill">
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

export default CalendarTitle
