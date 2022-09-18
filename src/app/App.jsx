import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { CalendarView } from 'components'
import TasksService from 'services/fakeTasksService'
import { useObserver } from 'hooks'
import { getEnvDate } from 'utils/date'

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
         * @type {Date}     last month of prev year
         */
        const startDate = new Date(date.getFullYear(), -1, 1)

        /**
         * @type {Date}     first month of next year
         */
        const endDate = new Date(date.getFullYear() + 1, 1, -1)

        /**
         * @type {object}   object of tasks that are in between last month of
         *                  prev year and first month of next year
         */
        const response = await TasksService.getByInterval(startDate, endDate)
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
