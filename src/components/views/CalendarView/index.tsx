import { CalendarHeader, CalendarItem } from 'components/calendar'
import withScrollHeader from 'hoc/withScrollHeader'
import { TasksResponse } from 'types'

interface CalendarViewProps {
  date: Date
  scrollHeader: boolean
  tasks: TasksResponse
  tasksUpdates: number
  onDate: (date: Date) => void
}

const CalendarView: React.FC<CalendarViewProps> = ({
  date,
  scrollHeader,
  tasks,
  tasksUpdates,
  onDate,
}) => {
  return (
    <div className="calendar container">
      <CalendarHeader date={date} scrollHeader={scrollHeader} onDate={onDate} />
      <CalendarItem date={date} tasks={tasks} tasksUpdates={tasksUpdates} />
    </div>
  )
}

export default withScrollHeader(CalendarView)
