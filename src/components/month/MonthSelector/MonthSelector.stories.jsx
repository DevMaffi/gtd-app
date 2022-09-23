import { useState } from 'react'
import { MonthSelector } from 'components/month'
import withRootStyles from 'hoc/withRootStyles'
import { getEnvDate } from 'utils/date'

const StyledMonthSelector = withRootStyles(MonthSelector)

export default {
  title: 'Components/Month/Selector',
  component: StyledMonthSelector,
  decorators: [
    Story => (
      <div style={{ marginLeft: 25 }}>
        <Story />
      </div>
    ),
  ],
}

const Story = args => {
  const [date, setDate] = useState(getEnvDate())
  return <StyledMonthSelector date={date} onDate={setDate} {...args} />
}

export const Primary = Story.bind({})
