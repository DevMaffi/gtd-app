import data from 'data.json'
import './calendarDays.sass'

const CalendarDays: React.FC = () => {
  return (
    <div className="calendar__days flex bg-body">
      {data.days.map(d => (
        <div key={d._id} className="calendar__day bg-container-light fs-600">
          {d.abbr}
        </div>
      ))}
    </div>
  )
}

export default CalendarDays
