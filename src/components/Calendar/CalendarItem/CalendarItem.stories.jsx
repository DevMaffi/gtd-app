import { CalendarItem } from 'components/calendar'
import withRootStyles from 'hoc/withRootStyles'
import { getEnvDate } from 'utils/date'

const StyledCalendarItem = withRootStyles(CalendarItem)

export default {
  title: 'Components/CalendarItem',
  component: StyledCalendarItem,
  argTypes: {
    date: { control: 'date' },
    tasks: { control: 'object' },
  },
}

const Story = ({ date, ...args }) => (
  <StyledCalendarItem date={new Date(date)} tasksUpdates={[]} {...args} />
)

export const Primary = Story.bind({})
Primary.args = {
  date: getEnvDate(),
  tasks: {
    [new Date(2022, 8, 7).toDateString()]: [
      { _id: 1, title: 'Morning running' },
      { _id: 2, title: 'Start learning React JS library' },
      { _id: 3, title: 'Spend time with family' },
      { _id: 4, title: 'New task+' },
    ],
    [new Date(2022, 8, 16).toDateString()]: [
      { _id: 1, title: 'Read book' },
      { _id: 2, title: 'Go to gym' },
    ],
  },
}
