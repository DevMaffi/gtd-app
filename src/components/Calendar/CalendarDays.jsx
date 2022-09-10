function CalendarDays() {
  return (
    <div className="calendar__days flex">
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fir', 'Sat', 'Sun'].map(m => (
        <div key={m} className="calendar__day bg-container-light fs-600">
          {m}
        </div>
      ))}
    </div>
  )
}

export default CalendarDays
