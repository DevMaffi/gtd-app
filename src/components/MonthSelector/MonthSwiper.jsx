import { Button } from '../UI'
import data from '../../data.json'

function MonthSwiper({ date, disabled, isOpen, onDropdown, onDate }) {
  const swipeMonth = inc => {
    if (isOpen === 'year') onDropdown('month')
    onDate(new Date(date.getFullYear(), date.getMonth() + inc, date.getDate()))
  }

  const displayDropdown = () => {
    if (!isOpen) return onDropdown('month')
    if (isOpen === 'month') return onDropdown('year')
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

export default MonthSwiper
