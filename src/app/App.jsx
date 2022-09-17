import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { CalendarView } from '../components'
import TasksService from '../services/fakeTasksService'
import useObserver from '../hooks/useObserver'
import { getEnvDate } from '../utils/date'

function App() {
  const [date, setDate] = useState(getEnvDate())
  const [scrollHeader, setScrollHeader] = useState(false)
  const [tasks, setTasks] = useState({})

  const firstElement = useRef(null)
  const tasksUpdates = useRef(0)
  const prevYear = useRef(date.getFullYear())

  const onTasks = tasks => {
    tasksUpdates.current++
    setTasks(tasks)
  }

  const onScrollHeader = value => () => setScrollHeader(value)

  useObserver(firstElement, onScrollHeader(false), onScrollHeader(true))

  useEffect(() => {
    if (!tasksUpdates.current || date.getFullYear() !== prevYear.current) {
      prevYear.current = date.getFullYear()

      const fetchTasks = async () => {
        /**
         * @param {Date} startDate - last month of prev year
         * @param {Date} endDate - first month of next year
         */
        const response = await TasksService.getByInterval(
          new Date(date.getFullYear(), -1, 1),
          new Date(date.getFullYear() + 1, 1, -1)
        )
        onTasks(response)
      }

      fetchTasks()
    }
  }, [date])

  return (
    <>
      <div
        ref={firstElement}
        style={{
          height: 20,
          position: 'absolute',
          top: 0,
        }}
      ></div>
      <CalendarView
        date={date}
        scrollHeader={scrollHeader}
        tasks={tasks}
        tasksUpdates={tasksUpdates.current}
        onDate={setDate}
      />
    </>
  )
}

export default App
