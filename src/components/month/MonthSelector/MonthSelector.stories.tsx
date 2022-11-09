import { ComponentStory, ComponentMeta } from '@storybook/react'
import MonthSelector from 'components/month/MonthSelector'
import withRootContext from 'hoc/withRootContext'

const RootedMonthSelector = withRootContext(MonthSelector)

export default {
  title: 'Components/Month/Selector',
  component: RootedMonthSelector,
  decorators: [
    Story => (
      <div style={{ display: 'inline-block', marginInline: 30 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof RootedMonthSelector>

const Story: ComponentStory<typeof RootedMonthSelector> = args => (
  <RootedMonthSelector {...args} />
)

export const Primary = Story.bind({})
