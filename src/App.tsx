import { useEffect, useRef, useState } from 'react'
import { CalendarView } from 'components/views'
import { useHttp, useTypedSelector } from 'hooks'
import TasksService from 'services/fakeTasksService'
import { ITasksResponse } from 'model/interfaces'
import { TasksApi } from 'model/classes'

const App: React.FC = () => {
  const tasksService = new TasksService(new TasksApi())

  const timestamp = useTypedSelector(state => state.date)
  const date = new Date(timestamp)

  const [tasks, setTasks] = useState<ITasksResponse>({})

  const yearsLoaded = useRef<number[]>([])

  const [fetchTasks, areTasksLoading, tasksError] = useHttp(
    async (): Promise<void> => {
      /**
       * @type {Date} - Last month of prev year
       */
      const startDate = new Date(date.getFullYear(), -1, 1)

      /**
       * @type {Date} - First month of next year
       */
      const endDate = new Date(date.getFullYear() + 1, 1, -1)

      /**
       * @type {Object} - Object of tasks that are in between last month of
       * prev year and first month of next year
       */
      const response = await tasksService.getByInterval(startDate, endDate)
      setTasks({ ...tasks, ...response })
    }
  )

  useEffect(() => {
    if (!yearsLoaded.current.includes(date.getFullYear())) {
      yearsLoaded.current.push(date.getFullYear())
      fetchTasks()
    }
  }, [date])

  return (
    <CalendarView
      topOffset={20}
      tasks={tasks}
      loading={areTasksLoading}
      tasksError={tasksError}
    />
  )
}

export default App
