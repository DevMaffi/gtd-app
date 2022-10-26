import { CalendarTaskItem } from 'components/calendar'
import { ITask } from 'types'
import './calendarTasks.sass'

export interface CalendarTasksListProps {
  tasks: ITask[]
}

const CalendarTasksList: React.FC<CalendarTasksListProps> = ({ tasks }) => {
  return (
    <div className="calendar__tasks grid">
      {tasks.slice(0, 3).map(t => (
        <CalendarTaskItem key={t._id} task={t} />
      ))}
    </div>
  )
}

export default CalendarTasksList
