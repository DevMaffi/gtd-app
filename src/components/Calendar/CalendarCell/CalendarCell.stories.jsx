import { CalendarCell } from 'components/calendar'
import withRootStyles from 'hoc/withRootStyles'

const StyledCalendarCell = withRootStyles(CalendarCell)

export default {
  title: 'Components/CalendarCell',
  component: StyledCalendarCell,
  decorators: [
    Story => (
      <div style={{ maxWidth: '200px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    dateNumber: { control: { type: 'range', min: 1, max: 31, step: 1 } },
    tasksAmount: { control: { type: 'range', min: 0, max: 4, step: 1 } },
    longTitle: { control: 'boolean' },
    prev: { control: 'boolean', if: { arg: 'today', truthy: false } },
    today: { control: 'boolean' },
    completed: { control: 'boolean', if: { arg: 'today', truthy: false } },
  },
}

const Story = ({ longTitle, tasksAmount, ...args }) => {
  const tasks = [...Array(tasksAmount).keys()].map(t => ({
    _id: t,
    title: longTitle ? 'Lörem ipsum kesk yspegon' : `Task ${t + 1}`,
  }))

  return <StyledCalendarCell tasks={tasks} {...args} />
}

export const Primary = Story.bind({})
Primary.args = {
  dateNumber: 6,
  tasksAmount: 2,
}

export const LongTitle = Story.bind({})
LongTitle.args = {
  dateNumber: 6,
  tasksAmount: 2,
  longTitle: true,
}

export const Previous = Story.bind({})
Previous.args = {
  dateNumber: 6,
  tasksAmount: 2,
  prev: true,
  completed: true,
}

export const Today = Story.bind({})
Today.args = {
  dateNumber: 6,
  tasksAmount: 2,
  today: true,
}

export const Completed = Story.bind({})
Completed.args = {
  dateNumber: 6,
  tasksAmount: 2,
  completed: true,
}

export const Overflowed = Story.bind({})
Overflowed.args = {
  dateNumber: 6,
  tasksAmount: 4,
}
