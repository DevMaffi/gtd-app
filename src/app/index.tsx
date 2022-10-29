import { useEffect, useRef, useState } from 'react'
import { CalendarView } from 'components/views'
import TasksService from 'services/fakeTasksService'
import { useHttp } from 'hooks'
import { getEnvDate } from 'utils/date'
import { TasksResponse } from 'model/interfaces'
import { TasksApi } from 'model/classes'

const App: React.FC = () => {
  const tasksService = new TasksService(new TasksApi())

  const [date, setDate] = useState<Date>(getEnvDate())
  const [tasks, setTasks] = useState<TasksResponse>({})

  const tasksUpdates = useRef<number>(0)
  const prevYear = useRef<number>(date.getFullYear())

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
      onTasks(response)
    }
  )

  const onTasks = (tasks: TasksResponse): void => {
    tasksUpdates.current++
    setTasks(tasks)
  }

  useEffect(() => {
    if (!tasksUpdates.current || date.getFullYear() !== prevYear.current) {
      prevYear.current = date.getFullYear()
      fetchTasks()
    }
  }, [date])

  return (
    <CalendarView
      topOffset={20}
      date={date}
      tasks={tasks}
      tasksUpdates={tasksUpdates.current}
      loading={areTasksLoading}
      tasksError={tasksError}
      onDate={setDate}
    />
  )
}

export default App
