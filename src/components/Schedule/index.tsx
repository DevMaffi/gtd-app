import { CalendarHeader, Calendar } from 'components/calendar'
import withScrollHeader, {
  WithScrollHeaderComponentProps,
} from 'hoc/withScrollHeader'

export type ScheduleProps = WithScrollHeaderComponentProps

const Schedule: React.FC<ScheduleProps> = ({ scrollHeader }) => {
  return (
    <div className="calendar container">
      <CalendarHeader scrollHeader={scrollHeader} />
      <Calendar />
    </div>
  )
}

export default withScrollHeader(Schedule)
