import { ITask } from 'types'
import './calendarTaskItem.sass'

export interface CalendarTaskItemProps {
  task: ITask
}

const CalendarTaskItem: React.FC<CalendarTaskItemProps> = ({ task }) => {
  return (
    <span className="calendar__task bg-container-light fs-300 text-light">
      {task.title}
    </span>
  )
}

export default CalendarTaskItem
