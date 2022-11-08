import React from 'react'
import classNames from 'classnames'
import withRipple from 'hoc/withRipple'
import './button.sass'

export type ButtonVariant = 'primary' | 'danger' | 'arrow' | 'pill'

export interface BaseButtonProps {
  variant?: ButtonVariant
  className?: string
  children?: React.ReactNode
  label?: string
}

export type ButtonProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps>

const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, variant = 'primary', className, label, ...restProps }, ref) => {
  const buttonClasses = classNames(
    'button',
    'text-light',
    {
      'bg-second': variant === 'danger',
      'button--arrow flex bg-container-light': variant === 'arrow',
      'button--pill flex bg-container-light fs-200': variant === 'pill',
    },
    className,
    { 'bg-first': variant === 'primary' }
  )

  if (children && label)
    console.warn(
      '[BUTTON] => Property "label" is depreciated by children element, because of its lower priority. Use either "children element" or "label prop".'
    )

  return (
    <button ref={ref} type="button" className={buttonClasses} {...restProps}>
      {children || label}
    </button>
  )
})

export default withRipple<HTMLButtonElement, ButtonProps>(Button)
