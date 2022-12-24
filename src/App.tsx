import { useEffect, useRef } from 'react'
import Schedule from 'components/Schedule'
import { useActions, useTypedSelector } from 'hooks'
import { tasksService } from 'config/services'
import { ITasksResponse } from 'model/interfaces'

const App: React.FC = () => {
  const { timestamp } = useTypedSelector(state => state.date)
  const date = new Date(timestamp)

  const { fetchTasks } = useActions()

  const yearsLoaded = useRef<number[]>([])

  const getTasksByInterval = (): Promise<ITasksResponse> => {
    /**
     * @type {Date} - First day of last month in year before current date
     */
    const startDate = new Date(date.getFullYear(), -1, 1)

    /**
     * @type {Date} - Last day of first month in year after current date
     */
    const endDate = new Date(date.getFullYear() + 1, 1, -1)

    return tasksService.getByInterval(startDate, endDate)
  }

  useEffect(() => {
    if (!yearsLoaded.current.includes(date.getFullYear())) {
      yearsLoaded.current.push(date.getFullYear())
      fetchTasks(getTasksByInterval)
    }
  }, [date])

  return <Schedule />
}

export default App
