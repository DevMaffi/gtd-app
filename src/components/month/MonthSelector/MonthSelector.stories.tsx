import { ComponentStory, ComponentMeta } from '@storybook/react'
import MonthSelector, {
  MonthSelectorProps,
} from 'components/month/MonthSelector'
import withRootStyles from 'hoc/withRootStyles'
import { getEnvDate } from 'utils/date'

const StyledMonthSelector = withRootStyles<MonthSelectorProps>(MonthSelector)

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
  argTypes: {
    date: { control: 'object' },
    onDate: { action: 'clicked', table: { disable: true } },
  },
} as ComponentMeta<typeof StyledMonthSelector>

const Story: ComponentStory<typeof StyledMonthSelector> = args => {
  return <StyledMonthSelector {...args} />
}

export const Primary = Story.bind({})
Primary.args = {
  date: getEnvDate(),
}
