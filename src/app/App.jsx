import { useState } from 'react'
import { CalendarView } from '../components'

function App() {
  const [date, setDate] = useState(new Date())

  return <CalendarView date={date} onDate={setDate} />
}

export default App
