import classNames from 'classnames'
import { CalendarTasksList } from 'components/calendar'
import { ITask } from 'model/interfaces'
import './calendarCell.sass'

export interface CalendarCellProps {
  dateNumber: number
  tasks: ITask[] | undefined
  prev: boolean
  next: boolean
  today: boolean
  passed: boolean
}

const CalendarCell: React.FC<CalendarCellProps> = ({
  dateNumber,
  tasks,
  prev,
  next,
  today,
  passed,
}) => {
  const cellClasses = classNames('calendar__cell', {
    'text-light': !prev && !next,
    today,
    passed,
  })

  return (
    <div className={cellClasses}>
      <span>{dateNumber}</span>
      {tasks && <CalendarTasksList tasks={tasks} />}
    </div>
  )
}

export default CalendarCell
