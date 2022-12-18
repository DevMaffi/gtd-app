import { useMemo } from 'react'
import { Dropdown } from 'components/dropdown'
import { MonthSwiper } from 'components/month'
import { useActions, useTypedSelector } from 'hooks'
import { getEnvDate, compareDates } from 'utils/date'
import {
  MonthSelectorDropdownView as DropdownView,
  DropdownOption,
  DropdownRenderPropArgs,
  SetDropdownFn,
} from 'types/common'
import data from 'data.json'

const MonthSelector: React.FC = () => {
  const { timestamp } = useTypedSelector(state => state.date)
  const date = new Date(timestamp)

  const { changeDate } = useActions()

  const yearOptions = useMemo<DropdownOption[]>(() => {
    const now = new Date(getEnvDate())
    const firstYear = now.getFullYear() - 3

    const options: DropdownOption[] = []

    const range = [...Array(12).keys()]
    range.forEach(i =>
      options.push({ _id: (i + 1).toString(), value: firstYear + i })
    )

    return options
  }, [])

  const monthOptions = useMemo<DropdownOption[]>(
    () =>
      data.months.map(m => ({
        _id: m._id,
        value: m.abbr,
      })),
    []
  )

  const getOptions = (dropdownView: DropdownView): DropdownOption[] => {
    if (dropdownView === 'year') return yearOptions
    return monthOptions
  }

  const getIsActiveHandler = (dropdownView: DropdownView) => {
    if (dropdownView === 'year')
      return (yearIndex: number) =>
        yearOptions[yearIndex].value === date.getFullYear()

    return (monthIndex: number) => monthIndex === date.getMonth()
  }

  const getDefaultOption = (dropdownView: DropdownView) => {
    const now = new Date(getEnvDate())

    if (dropdownView === 'year')
      return (yearIndex: number) =>
        yearOptions[yearIndex].value === now.getFullYear()

    return (monthIndex: number) => {
      const optionDate = new Date(date.getFullYear(), monthIndex, now.getDate())
      return compareDates(optionDate, now)
    }
  }

  const selectMonth =
    (dropdownView: DropdownView, onDropdown: SetDropdownFn<DropdownView>) =>
    (optionIndex: number) =>
    () => {
      const now = getEnvDate()
      const nextDate = new Date(date.getFullYear(), date.getMonth())

      if (dropdownView === 'month') {
        nextDate.setMonth(optionIndex)
        onDropdown(null)
      } else {
        const nextYear = yearOptions[optionIndex].value
        nextDate.setFullYear(
          typeof nextYear === 'string' ? parseInt(nextYear) : nextYear
        )

        onDropdown('month')
      }

      if (nextDate.getMonth() === now.getMonth())
        nextDate.setDate(now.getDate())

      changeDate(nextDate.getTime())
    }

  const renderProp = ({
    isOpen,
    dropdownView,
    onDropdown,
  }: DropdownRenderPropArgs<DropdownView>): React.ReactNode => (
    <MonthSwiper
      isOpen={isOpen}
      dropdownView={dropdownView}
      onDropdown={onDropdown}
    />
  )

  return (
    <Dropdown<DropdownView>
      on={renderProp}
      isActive={getIsActiveHandler}
      isDefault={getDefaultOption}
      setOptions={getOptions}
      onSelect={selectMonth}
    />
  )
}

export default MonthSelector
