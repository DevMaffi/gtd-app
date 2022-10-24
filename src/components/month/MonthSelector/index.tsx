import { useMemo } from 'react'
import { Dropdown } from 'components/dropdown'
import { MonthSwiper } from 'components/month'
import { getEnvDate, compareDates } from 'utils/date'
import {
  MonthSelectorDropdownView as DropdownView,
  MonthSelectorDropdownOption as DropdownOption,
  DropdownRenderPropArgs,
  SetDropdownFn,
} from 'types'
import data from 'data.json'

export interface MonthSelectorProps {
  date: Date
  onDate: (date: Date) => void
}

const MonthSelector: React.FC<MonthSelectorProps> = ({ date, onDate }) => {
  const yearOptions = useMemo<number[]>(() => {
    const now = new Date(getEnvDate())
    const firstYear = now.getFullYear() - 3

    const options: number[] = []

    const range = [...Array(12).keys()]
    range.forEach(i => options.push(firstYear + i))

    return options
  }, [])
  const monthOptions = data.shortenings.months

  const getOptions = (dropdownView: DropdownView): DropdownOption[] => {
    if (dropdownView === 'year') return yearOptions
    return monthOptions
  }

  const getIsActiveHandler = (dropdownView: DropdownView) => {
    if (dropdownView === 'year')
      return (yearIndex: number) =>
        yearOptions[yearIndex] === date.getFullYear()

    return (monthIndex: number) => monthIndex === date.getMonth()
  }

  const getDefaultOption = (dropdownView: DropdownView) => {
    const now = new Date(getEnvDate())

    if (dropdownView === 'year')
      return (yearIndex: number) => yearOptions[yearIndex] === now.getFullYear()

    return (monthIndex: number) => {
      const optionDate = new Date(
        date.getFullYear(),
        monthIndex,
        date.getDate()
      )
      return compareDates(optionDate, now)
    }
  }

  const selectMonth =
    (dropdownView: DropdownView, onDropdown: SetDropdownFn) =>
    (optionIndex: number) =>
    () => {
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

  const renderProp = ({
    isOpen,
    dropdownView,
    onDropdown,
  }: DropdownRenderPropArgs): React.ReactNode => (
    <MonthSwiper
      date={date}
      isOpen={isOpen}
      dropdownView={dropdownView}
      onDropdown={onDropdown}
      onDate={onDate}
    />
  )

  return (
    <Dropdown<DropdownView, DropdownOption>
      on={renderProp}
      isActive={getIsActiveHandler}
      isDefault={getDefaultOption}
      setOptions={getOptions}
      onSelect={selectMonth}
    />
  )
}

export default MonthSelector
