import { Button } from 'components/UI'
import withRootStyles from 'hoc/withRootStyles'

const StyledButton = withRootStyles(Button)

export default {
  title: 'Components/Button',
  component: StyledButton,
}

const Story = args => <StyledButton {...args} />

export const Primary = Story.bind({})
Primary.args = {
  children: 'Button',
  pill: false,
}

export const Pill = Story.bind({})
Pill.args = {
  children: 'pill button',
  pill: true,
}

export const Arrow = () => (
  <div className="flex">
    <StyledButton arrow>
      <i className="ri-arrow-left-s-line"></i>
    </StyledButton>
    <StyledButton arrow>
      <i className="ri-arrow-right-s-line"></i>
    </StyledButton>
  </div>
)
