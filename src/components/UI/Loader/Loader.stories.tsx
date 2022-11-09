import { ComponentStory, ComponentMeta } from '@storybook/react'
import Loader, { LoaderContainerProps } from 'components/UI/Loader'
import withRootContext from 'hoc/withRootContext'

const RootedLoader = withRootContext<LoaderContainerProps>(Loader)

export default {
  title: 'Components/UI/Loader',
  component: RootedLoader,
  argTypes: {
    isActive: { control: 'boolean' },
    size: { control: { type: 'range', min: 100, max: 300, step: 50 } },
  },
} as ComponentMeta<typeof RootedLoader>

const Story: ComponentStory<typeof RootedLoader> = args => (
  <RootedLoader {...args} />
)

export const Primary = Story.bind({})
Primary.args = {
  isActive: true,
  size: 150,
}
