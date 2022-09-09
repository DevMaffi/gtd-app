import { Button } from './UI'

function Date() {
  return (
    <div className="calendar__date flex">
      <Button arrow>
        <i className="ri-arrow-left-s-line"></i>
      </Button>
      <Button>Today</Button>
      <Button arrow>
        <i className="ri-arrow-right-s-line"></i>
      </Button>
    </div>
  )
}

export default Date
