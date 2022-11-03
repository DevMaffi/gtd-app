import { Button } from 'components/UI'
import { MonthSelectorDropdownView as DropdownView } from 'types/common'
import { getEnvDate } from 'utils/date'
import data from 'data.json'
import './monthSwiper.sass'

export interface MonthSwiperProps {
  date: Date
  isOpen: boolean
  dropdownView: DropdownView
  onDropdown: (dropdownView: DropdownView) => void
  onDate: (date: Date) => void
}

const MonthSwiper: React.FC<MonthSwiperProps> = ({
  date,
  isOpen,
  dropdownView,
  onDropdown,
  onDate,
}) => {
  type SwipeIncrementOption = 1 | -1

  const swipe = (inc: SwipeIncrementOption) => () => {
    const now = getEnvDate()
    const nextDate = new Date(date.getFullYear(), date.getMonth())

    if (dropdownView === 'year') nextDate.setFullYear(date.getFullYear() + inc)
    else nextDate.setMonth(date.getMonth() + inc)

    if (nextDate.getMonth() === now.getMonth()) nextDate.setDate(now.getDate())

    onDate(nextDate)
  }

  const displayDropdown = (): void => {
    if (!isOpen) return onDropdown('month')
    if (dropdownView === 'month') return onDropdown('year')
  }

  const isDisabled = (): boolean => dropdownView === 'year'

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
        {!isOpen && data.shortenings.months[date.getMonth()].value}{' '}
        {date.getFullYear()}
      </Button>
      <Button onClick={swipe(1)} variant="arrow">
        <i className="ri-arrow-right-s-line"></i>
      </Button>
    </div>
  )
}

export default MonthSwiper
