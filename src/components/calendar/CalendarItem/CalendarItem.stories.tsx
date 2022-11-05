import { ComponentStory, ComponentMeta } from '@storybook/react'
import { v4 } from 'uuid'
import Calendar, { CalendarProps } from 'components/calendar/CalendarItem'
import withRootStyles from 'hoc/withRootStyles'
import { ITasksResponse } from 'model/interfaces'
import { getEnvDate } from 'utils/date'

const StyledCalendarItem = withRootStyles<CalendarProps>(Calendar)

export default {
  title: 'Components/Calendar/Item',
  component: StyledCalendarItem,
  argTypes: {
    date: { control: 'object' },
    tasks: { control: 'object' },
  },
} as ComponentMeta<typeof StyledCalendarItem>

const Story: ComponentStory<typeof StyledCalendarItem> = args => (
  <StyledCalendarItem {...args} />
)

const tasks: ITasksResponse = {
  [new Date(2022, 10, 8).toDateString()]: [
    { _id: v4(), title: 'Present version two to reviewers' },
    { _id: v4(), title: 'Share with UX team' },
    { _id: v4(), title: 'Build!' },
    { _id: v4(), title: 'Ship!' },
  ],
  [new Date(2022, 10, 10).toDateString()]: [
    { _id: v4(), title: 'Take 🐶 out for a walk' },
    { _id: v4(), title: 'Meet with friends' },
  ],
  [new Date(2022, 10, 11).toDateString()]: [
    { _id: v4(), title: 'Debug queries' },
    { _id: v4(), title: 'Database tuning' },
  ],
}

export const Primary = Story.bind({})
Primary.args = {
  date: getEnvDate(),
  tasks,
}
