import { useState } from 'react'
import { Calendar } from '../components'

function App() {
  const [date, setDate] = useState(new Date())

  return <Calendar date={date} onDate={setDate} />
}

export default App
