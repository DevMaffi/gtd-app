import { Heading, Button } from 'components/UI'
import { getEnvDate, getDayName, getDateString, compareDates } from 'utils/date'
import RootClasses from 'utils/rootClasses'
import './calendarTitle.sass'

export interface CalendarTitleProps {
  date: Date
  onDate: (date: Date) => void
}

const CalendarTitle: React.FC<CalendarTitleProps> = ({ date, onDate }) => {
  let isNow = false

  const now = new Date(getEnvDate())
  const rootClasses = new RootClasses('calendar__title')
  const today = {
    day: getDayName(now.getDay()),
    date: getDateString(now.getDate()),
  }

  const jumpBack = (): void => onDate(now)

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
