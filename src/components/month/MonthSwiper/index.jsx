import PropTypes from 'prop-types'
import { Button } from 'components/UI'
import data from 'data.json'
import './monthSwiper.sass'

function MonthSwiper({ date, isOpen, dropdownView, onDropdown, onDate }) {
  const swipe = inc => () => {
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
    <div className="month-swiper flex">
      <Button onClick={swipe(-1)} variant="arrow">
        <i className="ri-arrow-left-s-line"></i>
      </Button>
      <Button
        onClick={displayDropdown}
        disabled={isDisabled()}
        className="month-swiper__button"
        ripple
      >
        {!isOpen && data.shortenings.months[date.getMonth()]}{' '}
        {date.getFullYear()}
      </Button>
      <Button onClick={swipe(1)} variant="arrow">
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
