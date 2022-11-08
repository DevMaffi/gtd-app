import classNames from 'classnames'
import { CalendarTitle } from 'components/calendar'
import { MonthSelector } from 'components/month'
import { Button } from 'components/UI'
import './calendarHeader.sass'

export interface CalendarHeaderProps {
  scrollHeader?: boolean
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ scrollHeader }) => {
  const headerClasses = classNames(
    'calendar__header',
    'container',
    'flex',
    'bg-body',
    {
      'scroll-header': scrollHeader,
    }
  )

  return (
    <header className={headerClasses}>
      <div className="calendar__header-inner flex">
        <div className="calendar__header-date grid">
          <CalendarTitle />
          <MonthSelector />
        </div>
        <Button className="calendar__header-button flex" ripple>
          <i className="ri-add-line"></i>
        </Button>
      </div>
    </header>
  )
}

export default CalendarHeader
