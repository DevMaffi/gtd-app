import { CalendarTasksList } from 'components/calendar'
import RootClasses from 'utils/rootClasses'
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
  const rootClasses = new RootClasses('calendar__cell')
    .add({
      condition: !prev && !next,
      type: 'curr',
      className: 'text-light',
    })
    .add({
      condition: today,
      type: 'today',
      className: 'now',
    })
    .add({
      condition: passed,
      type: 'passed',
      className: 'passed',
    })

  return (
    <div className={rootClasses.toClassNameString()}>
      <span>{dateNumber}</span>
      {tasks && <CalendarTasksList tasks={tasks} />}
    </div>
  )
}

export default CalendarCell
