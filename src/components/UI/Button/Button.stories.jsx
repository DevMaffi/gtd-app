import { Button } from 'components/UI'
import withRootStyles from 'hoc/withRootStyles'

const StyledButton = withRootStyles(Button)

const arrows = {
  arrowLeft: <i className="ri-arrow-left-s-line"></i>,
  arrowRight: <i className="ri-arrow-right-s-line"></i>,
}

export default {
  title: 'Components/Button',
  component: StyledButton,
  argTypes: {
    label: { control: 'text', if: { arg: 'variant', neq: 'arrow' } },
    children: {
      options: Object.keys(arrows),
      mapping: arrows,
      control: 'check',
      if: { arg: 'variant', eq: 'arrow' },
    },
    variant: {
      options: ['primary', 'danger', 'pill', 'arrow'],
      control: 'select',
    },
    ripple: { control: 'boolean' },
  },
}

const Story = ({ children, label, ...args }) => {
  if (children?.length) {
    return (
      <div className="flex">
        {children.length &&
          children.map(ch => (
            <StyledButton key={ch} children={arrows[ch]} {...args} />
          ))}
      </div>
    )
  }

  if (children?.type) return <StyledButton children={children} {...args} />

  return <StyledButton label={label ?? 'Button'} {...args} />
}

export const Primary = Story.bind({})
Primary.args = {
  label: 'Button',
  children: 'arrowLeft',
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
