import PropTypes from 'prop-types'
import { Button } from '../UI'
import data from '../../data.json'

function MonthSwiper({
  date,
  disabled,
  isOpen,
  dropdownView,
  onDropdown,
  onDate,
}) {
  const swipeMonth = inc => {
    if (onDropdown && dropdownView === 'year') onDropdown('month')
    onDate(new Date(date.getFullYear(), date.getMonth() + inc, date.getDate()))
  }

  const displayDropdown = () => {
    if (!onDropdown) return
    if (!isOpen) return onDropdown('month')
    if (dropdownView === 'month') return onDropdown('year')
  }

  return (
    <div className="calendar__month flex">
      <Button onClick={() => swipeMonth(-1)} arrow>
        <i className="ri-arrow-left-s-line"></i>
      </Button>
      <Button
        onClick={displayDropdown}
        disabled={disabled}
        className="dropdown__button"
        ripple
      >
        {!isOpen && data.shortenings.months[date.getMonth()]}{' '}
        {date.getFullYear()}
      </Button>
      <Button onClick={() => swipeMonth(1)} arrow>
        <i className="ri-arrow-right-s-line"></i>
      </Button>
    </div>
  )
}

MonthSwiper.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  dropdownView: PropTypes.string,
  onDropdown: PropTypes.func,
  onDate: PropTypes.func.isRequired,
}

export default MonthSwiper
