import { useEffect, useRef } from 'react'
import Schedule from 'components/Schedule'
import { useActions, useTypedSelector } from 'hooks'

const App: React.FC = () => {
  const timestamp = useTypedSelector(state => state.date)
  const date = new Date(timestamp)

  const { fetchTasks } = useActions()

  const yearsLoaded = useRef<number[]>([])

  useEffect(() => {
    if (!yearsLoaded.current.includes(date.getFullYear())) {
      yearsLoaded.current.push(date.getFullYear())
      fetchTasks(date)
    }
  }, [date])

  return <Schedule topOffset={20} />
}

export default App
