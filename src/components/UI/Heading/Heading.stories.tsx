import { ComponentStory, ComponentMeta } from '@storybook/react'
import Heading, { HeadingProps } from 'components/UI/Heading'
import withRootContext from 'hoc/withRootContext'

const RootedHeading = withRootContext<HeadingProps>(Heading)

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
  component: RootedHeading,
  argTypes: {
    children: {
      options: Object.keys(headings),
      mapping: headings,
      control: 'radio',
    },
  },
} as ComponentMeta<typeof RootedHeading>

const Story: ComponentStory<typeof RootedHeading> = args => (
  <RootedHeading {...args} />
)

export const Primary = Story.bind({})
Primary.args = {
  children: 'primary',
}

export const Shaded = Story.bind({})
Shaded.args = {
  children: 'shaded',
}
