import { useMemo } from 'react'
import { Dropdown } from 'components/dropdown'
import { DropdownRenderProp } from 'components/dropdown/DropdownItem'
import { DropdownOption } from 'components/dropdown/DropdownMenuItem'
import MonthSwiper, {
  MonthSwiperDropdownView as DropdownView,
} from 'components/month/MonthSwiper'
import { useActions, useStateDate } from 'hooks'
import { getEnvDate, compareDates } from 'utils/date'
import data from 'data.json'

const MonthSelector: React.FC = () => {
  const date = useStateDate()

  const { changeDate } = useActions()

  const yearOptions = useMemo<DropdownOption[]>(() => {
    const now = new Date(getEnvDate())
    const firstYear = now.getFullYear() - 3

    const options: DropdownOption[] = []

    const range = [...Array(12).keys()]
    range.forEach(i =>
      options.push({
        _id: i + 1,
        value: firstYear + i,
      })
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
    (
      dropdownView: DropdownView,
      onDropdown: (dropdownView: DropdownView) => void
    ) =>
    (optionIndex: number) =>
    (): void => {
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

  const renderProp: DropdownRenderProp<DropdownView> = ({
    isOpen,
    dropdownView,
    onDropdown,
  }) => (
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
