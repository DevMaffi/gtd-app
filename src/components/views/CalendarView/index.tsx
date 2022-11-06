import { CalendarHeader, Calendar } from 'components/calendar'
import withScrollHeader, {
  WithScrollHeaderComponentProps,
} from 'hoc/withScrollHeader'
import { ITasksResponse } from 'model/interfaces'

export interface CalendarViewProps {
  tasks: ITasksResponse
  loading: boolean
  tasksError: string
}

export type CalendarViewWithScrollHeaderProps = WithScrollHeaderComponentProps &
  CalendarViewProps

const CalendarView: React.FC<CalendarViewWithScrollHeaderProps> = ({
  scrollHeader,
  tasks,
  loading,
  tasksError,
}) => {
  return (
    <div className="calendar container">
      <CalendarHeader scrollHeader={scrollHeader} />
      <Calendar tasks={tasks} loading={loading} tasksError={tasksError} />
    </div>
  )
}

export default withScrollHeader<CalendarViewProps>(CalendarView)
