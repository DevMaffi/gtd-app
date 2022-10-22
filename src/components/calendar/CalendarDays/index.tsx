import data from 'data.json'
import './calendarDays.sass'

const CalendarDays: React.FC = () => {
  return (
    <div className="calendar__days flex bg-body">
      {data.shortenings.days.map(m => (
        <div key={m} className="calendar__day bg-container-light fs-600">
          {m}
        </div>
      ))}
    </div>
  )
}

export default CalendarDays
