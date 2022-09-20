import { Button } from 'components/UI'
import withRootStyles from 'hoc/withRootStyles'

const StyledButton = withRootStyles(Button)

export default {
  title: 'Components/Button',
  component: StyledButton,
}

const Story = args => <StyledButton {...args}>Button</StyledButton>

export const Primary = Story.bind({})
Primary.args = {
  ripple: true,
  danger: false,
}

export const Danger = Story.bind({})
Danger.args = {
  ripple: true,
  danger: true,
}

export const Pill = Story.bind({})
Pill.args = {
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
