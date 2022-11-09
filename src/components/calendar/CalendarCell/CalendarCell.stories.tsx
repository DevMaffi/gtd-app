import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CalendarCell } from 'components/calendar'
import { CalendarCellProps } from 'components/calendar/CalendarCell'
import withRootContext from 'hoc/withRootContext'

type CalendarCellStoriesProps = CalendarCellProps & {
  longTitle?: boolean
  tasksAmount?: number
}

const RootedCalendarCell =
  withRootContext<CalendarCellStoriesProps>(CalendarCell)

export default {
  title: 'Components/Calendar/Cell',
  component: RootedCalendarCell,
  decorators: [
    Story => (
      <div style={{ maxWidth: 200 }}>
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
    passed: { control: 'boolean', if: { arg: 'today', truthy: false } },
  },
} as ComponentMeta<typeof RootedCalendarCell>

const Story: ComponentStory<typeof RootedCalendarCell> = ({
  longTitle,
  tasksAmount,
  tasks,
  ...args
}) => {
  tasks = [...Array(tasksAmount).keys()].map(t => ({
    _id: t.toString(),
    title: longTitle ? 'Lörem ipsum kesk yspegon' : `Task ${t + 1}`,
  }))

  return <RootedCalendarCell tasks={tasks} {...args} />
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
  passed: true,
}

export const Today = Story.bind({})
Today.args = {
  dateNumber: 6,
  tasksAmount: 2,
  today: true,
}

export const Passed = Story.bind({})
Passed.args = {
  dateNumber: 6,
  tasksAmount: 2,
  passed: true,
}

export const Overflowed = Story.bind({})
Overflowed.args = {
  dateNumber: 6,
  tasksAmount: 4,
}
