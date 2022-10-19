import { ComponentStory, ComponentMeta } from '@storybook/react'
import CalendarHeader, {
  CalendarHeaderProps,
} from 'components/calendar/CalendarHeader'
import withRootStyles from 'hoc/withRootStyles'
import { getEnvDate } from 'utils/date'

export default {
  title: 'Components/Calendar/Header',
  component: CalendarHeader,
  argTypes: {
    date: { defaultValue: getEnvDate() },
    onDate: { action: 'clicked', table: { disable: true } },
  },
} as ComponentMeta<typeof CalendarHeader>

const Wrapper = withRootStyles<CalendarHeaderProps>(CalendarHeader)

const Story: ComponentStory<typeof CalendarHeader> = args => (
  <Wrapper {...args} />
)

export const Primary = Story.bind({})

export const ScrollHeader = Story.bind({})
ScrollHeader.args = {
  scrollHeader: true,
}
