import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button, { ButtonProps } from 'components/UI/Button'
import { WithRippleProps } from 'hoc/withRipple'
import withRootStyles from 'hoc/withRootStyles'

type StyledButtonProps = WithRippleProps &
  Omit<ButtonProps, keyof WithRippleProps>

const StyledButton = withRootStyles<StyledButtonProps>(Button)

const arrows = {
  arrowLeft: <i className="ri-arrow-left-s-line"></i>,
  arrowRight: <i className="ri-arrow-right-s-line"></i>,
}

export default {
  title: 'Components/UI/Button',
  component: StyledButton,
  argTypes: {
    label: { control: 'text', if: { arg: 'variant', neq: 'arrow' } },
    children: {
      options: Object.keys(arrows),
      mapping: arrows,
      control: 'select',
      if: { arg: 'variant', eq: 'arrow' },
    },
    variant: {
      options: ['primary', 'danger', 'pill', 'arrow'],
      control: 'select',
    },
    ripple: { control: 'boolean' },
  },
} as ComponentMeta<typeof StyledButton>

const Story: ComponentStory<typeof StyledButton> = ({
  children,
  label,
  ...args
}) => {
  if (children) return <StyledButton children={children} {...args} />

  return <StyledButton label={label ?? 'Button'} {...args} />
}

export const Primary = Story.bind({})
Primary.args = {
  label: 'Button',
  variant: 'primary',
  ripple: true,
}

export const Danger = Story.bind({})
Danger.args = {
  label: 'Button',
  variant: 'danger',
  ripple: true,
}

export const Pill = Story.bind({})
Pill.args = {
  label: 'pill button',
  variant: 'pill',
}

export const Arrow = Story.bind({})
Arrow.args = {
  children: 'arrowRight',
  variant: 'arrow',
}
