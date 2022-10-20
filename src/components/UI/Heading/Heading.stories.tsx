import { ComponentStory, ComponentMeta } from '@storybook/react'
import Heading, { HeadingProps } from 'components/UI/Heading'
import withRootStyles from 'hoc/withRootStyles'

const StyledHeading = withRootStyles<HeadingProps>(Heading)

const headings = {
  primary: <>Primary - heading example</>,
  shaded: (
    <>
      <span>Shaded</span> - heading example
    </>
  ),
}

export default {
  title: 'Components/UI/Heading',
  component: StyledHeading,
  argTypes: {
    children: {
      options: Object.keys(headings),
      mapping: headings,
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Heading>

const Story: ComponentStory<typeof Heading> = args => <Heading {...args} />

export const Primary = Story.bind({})
Primary.args = {
  children: 'primary',
}

export const Shaded = Story.bind({})
Shaded.args = {
  children: 'shaded',
}
