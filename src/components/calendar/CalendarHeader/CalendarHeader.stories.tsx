import { ComponentStory, ComponentMeta } from '@storybook/react'
import CalendarHeader, {
  CalendarHeaderProps,
} from 'components/calendar/CalendarHeader'
import withRootStyles from 'hoc/withRootStyles'
import { getEnvDate } from 'utils/date'

const StyledCalendarHeader = withRootStyles<CalendarHeaderProps>(CalendarHeader)

export default {
  title: 'Components/Calendar/Header',
  component: StyledCalendarHeader,
  argTypes: {
    date: { control: 'object' },
    onDate: { action: 'clicked', table: { disable: true } },
  },
} as ComponentMeta<typeof StyledCalendarHeader>

const Story: ComponentStory<typeof StyledCalendarHeader> = args => (
  <StyledCalendarHeader {...args} />
)

export const Primary = Story.bind({})
Primary.args = {
  date: getEnvDate(),
}

export const ScrollHeader = Story.bind({})
ScrollHeader.args = {
  date: getEnvDate(),
  scrollHeader: true,
}
