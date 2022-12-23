import { Button } from 'components/UI'
import { useActions, useTypedSelector } from 'hooks'
import { getEnvDate } from 'utils/date'
import data from 'data.json'
import './monthSwiper.sass'

export type MonthSwiperDropdownView = 'year' | 'month' | null

export interface MonthSwiperProps {
  isOpen: boolean
  dropdownView: MonthSwiperDropdownView
  onDropdown: (dropdownView: MonthSwiperDropdownView) => void
}

export type SwipeIncrementOption = 1 | -1

const MonthSwiper: React.FC<MonthSwiperProps> = ({
  isOpen,
  dropdownView,
  onDropdown,
}) => {
  const { timestamp } = useTypedSelector(state => state.date)
  const date = new Date(timestamp)

  const { changeDate } = useActions()

  const swipe = (inc: SwipeIncrementOption) => () => {
    const now = getEnvDate()
    const nextDate = new Date(date.getFullYear(), date.getMonth())

    if (dropdownView === 'year') nextDate.setFullYear(date.getFullYear() + inc)
    else nextDate.setMonth(date.getMonth() + inc)

    if (nextDate.getMonth() === now.getMonth()) nextDate.setDate(now.getDate())

    changeDate(nextDate.getTime())
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
        {!isOpen && data.months[date.getMonth()].abbr} {date.getFullYear()}
      </Button>
      <Button onClick={swipe(1)} variant="arrow">
        <i className="ri-arrow-right-s-line"></i>
      </Button>
    </div>
  )
}

export default MonthSwiper
