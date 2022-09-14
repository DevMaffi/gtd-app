import { useState } from 'react'
import { CalendarView } from '../components'
import { getEnvDate } from '../utils/date'

function App() {
  const [date, setDate] = useState(getEnvDate())

  return <CalendarView date={date} onDate={setDate} />
}

export default App
