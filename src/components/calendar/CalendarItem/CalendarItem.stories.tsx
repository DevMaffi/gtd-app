import { ComponentStory, ComponentMeta } from '@storybook/react'
import Calendar from 'components/calendar/CalendarItem'
import withRootContext from 'hoc/withRootContext'

const RootedCalendarItem = withRootContext(Calendar)

export default {
  title: 'Components/Calendar/Item',
  component: RootedCalendarItem,
} as ComponentMeta<typeof RootedCalendarItem>

const Story: ComponentStory<typeof RootedCalendarItem> = args => (
  <RootedCalendarItem {...args} />
)

export const Primary = Story.bind({})
