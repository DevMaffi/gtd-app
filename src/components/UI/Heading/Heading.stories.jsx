import { Heading } from 'components/UI'
import withRootStyles from 'hoc/withRootStyles'

const StyledHeading = withRootStyles(Heading)

const headings = {
  primary: <>Primary - heading example</>,
  shaded: (
    <>
      <span>Shaded</span> - heading example
    </>
  ),
}

export default {
  title: 'Components/Heading',
  component: StyledHeading,
  argTypes: {
    children: {
      options: Object.keys(headings),
      mapping: headings,
      control: 'radio',
    },
  },
}

const Story = args => <Heading {...args} />

export const Primary = Story.bind({})
Primary.args = {
  children: 'primary',
}

export const Shaded = Story.bind({})
Shaded.args = {
  children: 'shaded',
}
