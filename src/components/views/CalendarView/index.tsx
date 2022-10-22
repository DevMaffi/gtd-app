import { CalendarHeader, Calendar } from 'components/calendar'
import withScrollHeader, { IWithScrollHeader } from 'hoc/withScrollHeader'
import { TasksResponse } from 'types'

export interface CalendarViewProps {
  date: Date
  tasks: TasksResponse
  tasksUpdates: number
  onDate: (date: Date) => void
}

export type CalendarViewPropsWithScrollHeader = IWithScrollHeader &
  CalendarViewProps

const CalendarView: React.FC<CalendarViewPropsWithScrollHeader> = ({
  date,
  scrollHeader,
  tasks,
  tasksUpdates,
  onDate,
}) => {
  return (
    <div className="calendar container">
      <CalendarHeader date={date} scrollHeader={scrollHeader} onDate={onDate} />
      <Calendar date={date} tasks={tasks} tasksUpdates={tasksUpdates} />
    </div>
  )
}

export default withScrollHeader<CalendarViewProps>(CalendarView)
