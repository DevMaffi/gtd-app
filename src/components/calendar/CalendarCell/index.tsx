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
  completed: boolean
}

const CalendarCell: React.FC<CalendarCellProps> = ({
  dateNumber,
  tasks,
  prev,
  next,
  today,
  completed,
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
      condition: completed,
      type: 'completed',
      className: 'completed',
    })

  return (
    <div className={rootClasses.toClassNameString()}>
      <span>{dateNumber}</span>
      {tasks && <CalendarTasksList tasks={tasks} />}
    </div>
  )
}

export default CalendarCell
