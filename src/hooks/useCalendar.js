import { useMemo } from 'react'

export function usePrevDays(date) {
  const prevDays = useMemo(() => {
    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate()

    const firstDayIndex = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay()

    const prevDaysArr = []

    let daysAmount = 0
    if (firstDayIndex === 0) daysAmount = 6
    else daysAmount = firstDayIndex - 1

    const rangeReverse = [...Array(daysAmount).keys()].reverse()
    rangeReverse.forEach(i => prevDaysArr.push(prevLastDay - i))

    return prevDaysArr
  }, [date])

  return prevDays
}

export function useDays(date) {
  const days = useMemo(() => {
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate()

    const daysArr = []

    const daysAmount = lastDay
    const range = [...Array(daysAmount).keys()]
    range.forEach(i => daysArr.push(i + 1))

    return daysArr
  }, [date])

  return days
}

export function useNextDays(date) {
  const nextDays = useMemo(() => {
    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay()

    const nextDaysArr = []

    if (lastDayIndex === 0) return nextDaysArr

    const daysAmount = 7 - lastDayIndex
    const range = [...Array(daysAmount).keys()]
    range.forEach(i => nextDaysArr.push(i + 1))

    return nextDaysArr
  }, [date])

  return nextDays
}
