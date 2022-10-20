import { useMemo } from 'react'
import { Dropdown } from 'components/dropdown'
import { MonthSwiper } from 'components/month'
import { getEnvDate, compareDates } from 'utils/date'
import { DropdownRenderPropArgs } from 'types'
import data from 'data.json'

export type DropdownView = 'year' | 'month' | null
export type DropdownOption = string | number

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
    (
      dropdownView: DropdownView,
      onDropdown: (dropdownView: DropdownView) => void
    ) =>
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

  return (
    <Dropdown
      on={({ isOpen, dropdownView, onDropdown }: DropdownRenderPropArgs) => (
        <MonthSwiper
          date={date}
          isOpen={isOpen}
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

export default MonthSelector
