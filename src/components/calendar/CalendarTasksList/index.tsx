import { CalendarTaskItem } from 'components/calendar'
import { useTypedSelector } from 'hooks'
import './calendarTasks.sass'

export interface CalendarTasksListProps {
  dueDate: string
}

const CalendarTasksList: React.FC<CalendarTasksListProps> = ({ dueDate }) => {
  const { tasks } = useTypedSelector(state => state.task)
  const dueDateTasks = tasks[dueDate]

  return (
    <>
      {dueDateTasks && (
        <div className="calendar__tasks grid">
          {dueDateTasks.map(t => (
            <CalendarTaskItem key={t._id} task={t} dueDate={dueDate} />
          ))}
        </div>
      )}
    </>
  )
}

export default CalendarTasksList
