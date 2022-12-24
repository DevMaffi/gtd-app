import { CalendarTaskItem } from 'components/calendar'
import { ITask } from 'model/interfaces'
import './calendarTasks.sass'

export interface CalendarTasksListProps {
  dueDate: string
  tasks: ITask[]
}

const CalendarTasksList: React.FC<CalendarTasksListProps> = ({
  dueDate,
  tasks,
}) => {
  return (
    <>
      {tasks && (
        <div className="calendar__tasks grid">
          {tasks.map(t => (
            <CalendarTaskItem key={t._id} task={t} dueDate={dueDate} />
          ))}
        </div>
      )}
    </>
  )
}

export default CalendarTasksList
