import { useMemo, useState } from 'react'
import { DropdownMenu } from './Dropdown'
import { Button } from './UI'
import { getMonthName } from '../utils/date'

function MonthSelector({ date, onDate }) {
  const [dropdownView, setDropdownView] = useState(null)
  const month = useMemo(() => getMonthName(date.getMonth()).slice(0, 3), [date])
  const yearOptions = useMemo(() => {
    const now = new Date()
    const firstYear = now.getFullYear() - 3

    let options = []

    for (let i = 0; i < 12; i++) {
      options.push(firstYear + i)
    }

    return options
  }, [])

  const rootClasses = ['dropdown', 'flex']

  const swipeMonth = inc => {
    if (dropdownView === 'year') setDropdownView('month')
    onDate(new Date(date.getFullYear(), date.getMonth() + inc, date.getDate()))
  }

  const selectMonth = optionIndex => {
    if (dropdownView === 'month') {
      onDate(new Date(date.getFullYear(), optionIndex, date.getDate()))
      setDropdownView(null)
      return
    }

    onDate(new Date(yearOptions[optionIndex], date.getMonth(), date.getDate()))
    setDropdownView('month')
  }

  const getOptions = () => {
    if (dropdownView === 'year') return yearOptions

    return [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
  }

  const getIsActiveHandler = () => {
    if (dropdownView === 'year')
      return yearIndex => yearOptions[yearIndex] === date.getFullYear()

    return monthIndex => monthIndex === date.getMonth()
  }

  if (dropdownView) rootClasses.push('open')

  return (
    <div className={rootClasses.join(' ')}>
      <div className="calendar__month flex">
        <Button onClick={() => swipeMonth(-1)} arrow>
          <i className="ri-arrow-left-s-line"></i>
        </Button>
        <Button
          onClick={() => {
            if (!dropdownView) return setDropdownView('month')
            if (dropdownView === 'month') return setDropdownView('year')
          }}
          className="dropdown__button"
          disabled={dropdownView === 'year'}
          ripple
        >
          {!dropdownView && month} {date.getFullYear()}
        </Button>
        <Button onClick={() => swipeMonth(1)} arrow>
          <i className="ri-arrow-right-s-line"></i>
        </Button>
      </div>
      <DropdownMenu
        options={getOptions()}
        isActive={getIsActiveHandler()}
        onSelect={selectMonth}
      />
    </div>
  )
}

export default MonthSelector
