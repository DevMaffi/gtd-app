import { useMemo } from 'react'
import { getDateString } from '../utils/date'
import data from '../data.json'

export function useToday() {
  const today = useMemo(() => {
    const now = new Date()
    const days = data.shortenings.days

    return {
      day: now.getDay() === 0 ? days[days.length - 1] : days[now.getDay() - 1],
      date: getDateString(now.getDate()),
    }
  }, [])

  return today
}
