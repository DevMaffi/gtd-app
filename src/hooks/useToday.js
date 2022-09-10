import { useMemo } from 'react'
import { getDayName, getDateString } from '../utils/date'

export function useToday() {
  const today = useMemo(() => {
    const now = new Date()

    return {
      day: getDayName(now.getDay()).slice(0, 3),
      date: getDateString(now.getDate()),
    }
  }, [])

  return today
}
