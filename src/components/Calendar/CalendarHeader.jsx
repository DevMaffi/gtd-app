import PropTypes from 'prop-types'
import CalendarTitle from './CalendarTitle'
import MonthSelector from '../MonthSelector'
import { Button } from '../UI'

function CalendarHeader({ scrollHeader, ...props }) {
  const rootClasses = ['calendar__header', 'container', 'flex', 'bg-body']

  if (scrollHeader) rootClasses.push('scroll-header')

  return (
    <header className={rootClasses.join(' ')}>
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
