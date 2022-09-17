import data from '../../data.json'

function CalendarDays() {
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
