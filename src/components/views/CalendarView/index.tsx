import { CalendarHeader, Calendar } from 'components/calendar'
import withScrollHeader, {
  WithScrollHeaderComponentProps,
} from 'hoc/withScrollHeader'

export type CalendarViewWithScrollHeaderProps = WithScrollHeaderComponentProps

const CalendarView: React.FC<CalendarViewWithScrollHeaderProps> = ({
  scrollHeader,
}) => {
  return (
    <div className="calendar container">
      <CalendarHeader scrollHeader={scrollHeader} />
      <Calendar />
    </div>
  )
}

export default withScrollHeader<{}>(CalendarView)
