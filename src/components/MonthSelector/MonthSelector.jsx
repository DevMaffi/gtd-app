import { useMemo } from 'react'
import PropTypes from 'prop-types'
import MonthSwiper from './MonthSwiper'
import Dropdown from '../Dropdown'
import { getEnvDate, compareDates } from '../../utils/date'
import data from '../../data.json'

function MonthSelector({ date, onDate }) {
  const yearOptions = useMemo(() => {
    const now = new Date(getEnvDate())
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

  const getDefaultOption = dropdownView => {
    const now = new Date(process.env.REACT_APP_DATE)

    if (dropdownView === 'year')
      return yearIndex => yearOptions[yearIndex] === now.getFullYear()

    return monthIndex => {
      const optionDate = new Date(
        date.getFullYear(),
        monthIndex,
        date.getDate()
      )
      return compareDates(optionDate, now)
    }
  }

  const selectMonth = (optionIndex, dropdownView, onDropdown) => {
    const nextDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    )

    if (dropdownView === 'month') {
      nextDate.setMonth(optionIndex)
      onDropdown(null)
    } else {
      nextDate.setFullYear(yearOptions[optionIndex])
      onDropdown('month')
    }

    onDate(nextDate)
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
      isDefault={getDefaultOption}
      setOptions={getOptions}
      onSelect={selectMonth}
    />
  )
}

MonthSelector.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onDate: PropTypes.func.isRequired,
}

export default MonthSelector
