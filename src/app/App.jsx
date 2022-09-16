import { useEffect } from 'react'
import { useState } from 'react'
import { CalendarView } from '../components'
import TasksService from '../services/fakeTasksService'
import { getEnvDate } from '../utils/date'

function App() {
  const [date, setDate] = useState(getEnvDate())
  const [tasks, setTasks] = useState({})

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await TasksService.getByInterval(
        new Date(date.getFullYear(), date.getMonth() - 1, 1),
        new Date(date.getFullYear(), date.getMonth() + 2, -1)
      )
      setTasks(response)
    }

    fetchTasks()
  }, [date])

  return <CalendarView date={date} tasks={tasks} onDate={setDate} />
}

export default App
