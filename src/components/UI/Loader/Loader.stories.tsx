import { ComponentStory, ComponentMeta } from '@storybook/react'
import Loader from 'components/UI/Loader'
import withRootStyles from 'hoc/withRootStyles'

const StyledLoader = withRootStyles<{}>(Loader)

export default {
  title: 'Components/UI/Loader',
  component: StyledLoader,
  decorators: [
    Story => (
      <div style={{ maxWidth: 200 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof StyledLoader>

const Story: ComponentStory<typeof StyledLoader> = () => <StyledLoader />

export const Primary = Story.bind({})
