import { CalendarHeader, Calendar } from 'components/calendar'
import withScrollHeader, { IWithScrollHeader } from 'hoc/withScrollHeader'
import { ITasksResponse } from 'model/interfaces'

export interface CalendarViewProps {
  date: Date
  tasks: ITasksResponse
  tasksUpdates: number
  loading: boolean
  tasksError: string
  onDate: (date: Date) => void
}

export type CalendarViewWithScrollHeaderProps = IWithScrollHeader &
  CalendarViewProps

const CalendarView: React.FC<CalendarViewWithScrollHeaderProps> = ({
  date,
  scrollHeader,
  tasks,
  tasksUpdates,
  loading,
  tasksError,
  onDate,
}) => {
  return (
    <div className="calendar container">
      <CalendarHeader date={date} scrollHeader={scrollHeader} onDate={onDate} />
      <Calendar
        date={date}
        tasks={tasks}
        tasksUpdates={tasksUpdates}
        loading={loading}
        tasksError={tasksError}
      />
    </div>
  )
}

export default withScrollHeader<CalendarViewProps>(CalendarView)
