import { useEffect, useRef, useState } from 'react'
import { CalendarView } from 'components/views'
import TasksService from 'services/fakeTasksService'
import { useHttp } from 'hooks'
import { getEnvDate } from 'utils/date'
import { ITasksResponse } from 'model/interfaces'
import { TasksApi } from 'model/classes'

const App: React.FC = () => {
  const tasksService = new TasksService(new TasksApi())

  const [date, setDate] = useState<Date>(getEnvDate())
  const [tasks, setTasks] = useState<ITasksResponse>({})

  const prevYear = useRef<number>(0)

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
      setTasks(response)
    }
  )

  useEffect(() => {
    if (date.getFullYear() !== prevYear.current) {
      prevYear.current = date.getFullYear()
      fetchTasks()
    }
  }, [date])

  return (
    <CalendarView
      topOffset={20}
      date={date}
      tasks={tasks}
      loading={areTasksLoading}
      tasksError={tasksError}
      onDate={setDate}
    />
  )
}

export default App
