import PropTypes from 'prop-types'
import { CalendarTitle } from 'components/calendar'
import { MonthSelector } from 'components/month'
import { Button } from 'components/UI'
import RootClasses from 'utils/rootClasses'
import './calendarHeader.sass'

function CalendarHeader({ scrollHeader, ...props }) {
  const rootClasses = new RootClasses(
    'calendar__header container flex bg-body'
  ).add({
    condition: scrollHeader,
    type: 'scrollHeader',
    className: 'scroll-header',
  })

  return (
    <header className={rootClasses.toClassNameString()}>
      <div className="calendar__header-inner flex">
        <div className="calendar__header-date grid">
          <CalendarTitle {...props} />
          <MonthSelector {...props} />
        </div>
        <Button ripple>+</Button>
      </div>
    </header>
  )
}

CalendarHeader.propTypes = {
  scrollHeader: PropTypes.bool,
}

export default CalendarHeader
