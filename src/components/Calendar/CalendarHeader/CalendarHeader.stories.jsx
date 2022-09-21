import { useState } from 'react'
import { CalendarHeader } from 'components/calendar'
import withRootStyles from 'hoc/withRootStyles'
import { getEnvDate } from 'utils/date'

export default {
  title: 'Components/CalendarHeader',
  component: CalendarHeader,
  argTypes: {
    scrollHeader: { control: 'boolean' },
  },
}

const Wrapper = withRootStyles(args => {
  const [date, setDate] = useState(getEnvDate())
  return <CalendarHeader date={date} onDate={setDate} {...args} />
})

const Story = args => <Wrapper {...args} />

export const Primary = Story.bind({})

export const ScrollHeader = Story.bind({})
ScrollHeader.args = {
  scrollHeader: true,
}
