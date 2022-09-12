import { useMemo } from 'react'
import MonthSwiper from './MonthSwiper'
import Dropdown from '../Dropdown'
import data from '../../data.json'

function MonthSelector({ date, onDate }) {
  const yearOptions = useMemo(() => {
    const now = new Date()
    const firstYear = now.getFullYear() - 3

    let options = []
    for (let i = 0; i < 12; i++) options.push(firstYear + i)

    return options
  }, [])
  const monthOptions = data.shortenings.months

  const getOptions = dropdownView => {
    if (dropdownView === 'year') return yearOptions
    return monthOptions
  }

  const getIsActiveHandler = dropdownView => {
    if (dropdownView === 'year')
      return yearIndex => yearOptions[yearIndex] === date.getFullYear()

    return monthIndex => monthIndex === date.getMonth()
  }

  const isDisabled = dropdownView => dropdownView === 'year'

  const selectMonth = (optionIndex, dropdownView, onDropdown) => {
    if (dropdownView === 'month') {
      onDate(new Date(date.getFullYear(), optionIndex, date.getDate()))
      onDropdown(null)
      return
    }

    onDate(new Date(yearOptions[optionIndex], date.getMonth(), date.getDate()))
    onDropdown('month')
  }

  return (
    <Dropdown
      on={({ isOpen, disabled, dropdownView, onDropdown }) => (
        <MonthSwiper
          date={date}
          isOpen={isOpen}
          disabled={disabled}
          dropdownView={dropdownView}
          onDropdown={onDropdown}
          onDate={onDate}
        />
      )}
      isActive={getIsActiveHandler}
      setOptions={getOptions}
      setDisabled={isDisabled}
      onSelect={selectMonth}
    />
  )
}

export default MonthSelector
