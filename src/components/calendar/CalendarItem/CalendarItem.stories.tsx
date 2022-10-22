import { ComponentStory, ComponentMeta } from '@storybook/react'
import Calendar, { CalendarProps } from 'components/calendar/CalendarItem'
import withRootStyles from 'hoc/withRootStyles'
import { getEnvDate } from 'utils/date'

const StyledCalendarItem = withRootStyles<CalendarProps>(Calendar)

export default {
  title: 'Components/Calendar/Item',
  component: StyledCalendarItem,
  argTypes: {
    date: { control: 'object' },
    tasks: { control: 'object' },
    tasksUpdates: { control: 'number', min: 0 },
  },
} as ComponentMeta<typeof Calendar>

const Story: ComponentStory<typeof Calendar> = args => (
  <StyledCalendarItem {...args} />
)

export const Primary = Story.bind({})
Primary.args = {
  date: getEnvDate(),
  tasks: {
    [new Date(2022, 8, 7).toDateString()]: [
      { _id: '1', title: 'Morning running' },
      { _id: '2', title: 'Start learning React JS library' },
      { _id: '3', title: 'Spend time with family' },
      { _id: '4', title: 'New task+' },
    ],
    [new Date(2022, 8, 16).toDateString()]: [
      { _id: '1', title: 'Read book' },
      { _id: '2', title: 'Go to gym' },
    ],
  },
  tasksUpdates: 0,
}
