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

    let prevDaysArr = []

    if (firstDayIndex === 0) {
      for (let i = 7; i > 1; i--) {
        prevDaysArr.push(prevLastDay - i + 2)
      }

      return prevDaysArr
    }

    for (let i = firstDayIndex; i > 1; i--) {
      prevDaysArr.push(prevLastDay - i + 2)
    }

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

    let daysArr = []

    for (let i = 0; i < lastDay; i++) {
      daysArr.push(i + 1)
    }

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

    let nextDaysArr = []

    if (lastDayIndex === 0) return nextDaysArr

    for (let i = 0; i < 7 - lastDayIndex; i++) {
      nextDaysArr.push(i + 1)
    }

    return nextDaysArr
  }, [date])

  return nextDays
}
