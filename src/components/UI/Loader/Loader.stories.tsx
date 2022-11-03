import { ComponentStory, ComponentMeta } from '@storybook/react'
import Loader, { LoaderProps } from 'components/UI/Loader'
import withRootStyles from 'hoc/withRootStyles'

const StyledLoader = withRootStyles<LoaderProps>(Loader)

export default {
  title: 'Components/UI/Loader',
  component: StyledLoader,
  argTypes: {
    size: { control: { type: 'range', min: 100, max: 500, step: 50 } },
  },
} as ComponentMeta<typeof StyledLoader>

const Story: ComponentStory<typeof StyledLoader> = args => (
  <StyledLoader {...args} />
)

export const Primary = Story.bind({})
Primary.args = {
  size: 150,
}
