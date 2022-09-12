import { useMemo, useState } from 'react'
import MonthSwiper from './MonthSwiper'
import { DropdownMenu } from '../Dropdown'
import data from '../../data.json'

function MonthSelector({ date, onDate }) {
  const [dropdownView, setDropdownView] = useState(null)
  const yearOptions = useMemo(() => {
    const now = new Date()
    const firstYear = now.getFullYear() - 3

    let options = []
    for (let i = 0; i < 12; i++) options.push(firstYear + i)

    return options
  }, [])
  const monthOptions = data.shortenings.months
  const rootClasses = ['dropdown', 'flex']

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
    return monthOptions
  }

  const getIsActiveHandler = () => {
    if (dropdownView === 'year')
      return yearIndex => yearOptions[yearIndex] === date.getFullYear()

    return monthIndex => monthIndex === date.getMonth()
  }

  if (dropdownView) rootClasses.push('open')

  return (
    <div className={rootClasses.join(' ')}>
      <MonthSwiper
        date={date}
        isOpen={dropdownView}
        disabled={dropdownView === 'year'}
        onDropdown={setDropdownView}
        onDate={onDate}
      />
      <DropdownMenu
        options={getOptions()}
        isActive={getIsActiveHandler()}
        onSelect={selectMonth}
      />
    </div>
  )
}

export default MonthSelector
