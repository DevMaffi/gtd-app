import { CalendarHeader, Calendar } from 'components/calendar'
import withScrollHeader, { IWithScrollHeader } from 'hoc/withScrollHeader'
import { TasksResponse } from 'model/interfaces'

export interface CalendarViewProps {
  date: Date
  tasks: TasksResponse
  tasksUpdates: number
  loading: boolean
  onDate: (date: Date) => void
}

export type CalendarViewPropsWithScrollHeader = IWithScrollHeader &
  CalendarViewProps

const CalendarView: React.FC<CalendarViewPropsWithScrollHeader> = ({
  date,
  scrollHeader,
  tasks,
  tasksUpdates,
  loading,
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
      />
    </div>
  )
}

export default withScrollHeader<CalendarViewProps>(CalendarView)
