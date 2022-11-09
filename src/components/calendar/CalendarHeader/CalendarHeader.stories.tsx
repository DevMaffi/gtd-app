import { ComponentStory, ComponentMeta } from '@storybook/react'
import CalendarHeader, {
  CalendarHeaderProps,
} from 'components/calendar/CalendarHeader'
import withRootContext from 'hoc/withRootContext'

const RootedCalendarHeader =
  withRootContext<CalendarHeaderProps>(CalendarHeader)

export default {
  title: 'Components/Calendar/Header',
  component: RootedCalendarHeader,
  argTypes: {
    scrollHeader: { control: 'boolean' },
  },
} as ComponentMeta<typeof RootedCalendarHeader>

const Story: ComponentStory<typeof RootedCalendarHeader> = args => (
  <RootedCalendarHeader {...args} />
)

export const Primary = Story.bind({})

export const ScrollHeader = Story.bind({})
ScrollHeader.args = {
  scrollHeader: true,
}
