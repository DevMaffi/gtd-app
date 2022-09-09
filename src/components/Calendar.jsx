function Calendar() {
  return (
    <div className="calendar container">
      <header className="calendar__header flex">
        <h1 className="calendar__month fs-900 text-light">
          September <span>2022</span>
        </h1>
        <div className="calendar__date flex">
          <button className="button button--arrow bg-container-light text-light">
            <i class="ri-arrow-left-s-line"></i>
          </button>
          <button className="button bg-grade text-light" type="button">
            Today
          </button>
          <button className="button button--arrow bg-container-light text-light">
            <i class="ri-arrow-right-s-line"></i>
          </button>
        </div>
        <button
          className="calendar__add button bg-grade text-light"
          type="button"
        >
          +
        </button>
      </header>
    </div>
  )
}

export default Calendar
