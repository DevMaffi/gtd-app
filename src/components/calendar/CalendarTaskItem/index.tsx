import { useActions } from 'hooks'
import { ITask } from 'model/interfaces'
import './calendarTaskItem.sass'

export interface CalendarTaskItemProps {
  task: ITask
  dueDate: string
}

const CalendarTaskItem: React.FC<CalendarTaskItemProps> = ({
  task,
  dueDate,
}) => {
  const { startTaskDrugging } = useActions()

  const dragStartHandler = (): void => {
    startTaskDrugging(task, dueDate)
  }

  return (
    <span
      draggable
      onDragStart={dragStartHandler}
      className="calendar__task bg-container-light fs-300 text-light"
    >
      {task.title}
    </span>
  )
}

export default CalendarTaskItem
