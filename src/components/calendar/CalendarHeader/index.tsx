import { CalendarTitle } from 'components/calendar'
import { MonthSelector } from 'components/month'
import { Button } from 'components/UI'
import RootClasses from 'utils/rootClasses'
import './calendarHeader.sass'

export interface CalendarHeaderProps {
  scrollHeader?: boolean
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ scrollHeader }) => {
  const rootClasses = new RootClasses(
    'calendar__header container flex bg-body'
  ).add({
    condition: !!scrollHeader,
    type: 'scrollHeader',
    className: 'scroll-header',
  })

  return (
    <header className={rootClasses.toClassNameString()}>
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
