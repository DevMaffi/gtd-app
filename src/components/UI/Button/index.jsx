import React from 'react'
import withRipple from 'hoc/withRipple'
import RootClasses from 'utils/rootClasses'
import './button.sass'

function Button({ children, variant, className, label, ...props }, ref) {
  const rootClasses = new RootClasses('button text-light')
    .add({
      condition: variant === 'danger',
      type: 'danger',
      className: 'bg-second',
    })
    .add({
      condition: variant === 'arrow',
      type: 'arrow',
      className: 'button--arrow flex bg-container-light',
    })
    .add({
      condition: variant === 'pill',
      type: 'pill',
      className: 'button--pill flex bg-container-light fs-200',
    })
    .add({
      condition: className,
      type: 'extra',
      className,
      alwaysPrimary: true,
    })
    .addPrimary('bg-first')

  if (children && label)
    console.warn(
      '[BUTTON] => Property "label" is depreciated by children element, because of its lower priority. Use either "children element" or "label prop".'
    )

  return (
    <button
      ref={ref}
      type="button"
      className={rootClasses.toClassNameString()}
      {...props}
    >
      {children || label}
    </button>
  )
}

export default withRipple(React.forwardRef(Button))
