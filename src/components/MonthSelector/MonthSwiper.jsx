import PropTypes from 'prop-types'
import { Button } from '../UI'
import data from '../../data.json'

function MonthSwiper({ date, isOpen, dropdownView, onDropdown, onDate }) {
  const swipe = inc => {
    const nextDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    )

    if (dropdownView === 'year') nextDate.setFullYear(date.getFullYear() + inc)
    else nextDate.setMonth(date.getMonth() + inc)

    onDate(nextDate)
  }

  const displayDropdown = () => {
    if (!isOpen) return onDropdown('month')
    if (dropdownView === 'month') return onDropdown('year')
  }

  const isDisabled = () => dropdownView === 'year'

  return (
    <div className="calendar__month flex">
      <Button onClick={() => swipe(-1)} arrow>
        <i className="ri-arrow-left-s-line"></i>
      </Button>
      <Button
        onClick={displayDropdown}
        disabled={isDisabled()}
        className="dropdown__button"
        ripple
      >
        {!isOpen && data.shortenings.months[date.getMonth()]}{' '}
        {date.getFullYear()}
      </Button>
      <Button onClick={() => swipe(1)} arrow>
        <i className="ri-arrow-right-s-line"></i>
      </Button>
    </div>
  )
}

MonthSwiper.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  isOpen: PropTypes.bool,
  dropdownView: PropTypes.string,
  onDropdown: PropTypes.func.isRequired,
  onDate: PropTypes.func.isRequired,
}

export default MonthSwiper
