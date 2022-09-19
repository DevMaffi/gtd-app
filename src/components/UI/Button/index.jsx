import React from 'react'
import withRipple from 'hoc/withRipple'
import RootClasses from 'utils/rootClasses'
import './button.sass'

function Button({ children, arrow, danger, pill, className, ...props }, ref) {
  const rootClasses = new RootClasses(['button', 'text-light'])
    .add({
      condition: arrow,
      className: 'button--arrow flex bg-container-light',
    })
    .add({
      condition: danger,
      className: 'bg-second',
    })
    .add({
      condition: pill,
      className: 'button--pill flex bg-container-light fs-200',
      alwaysPrimary: false,
      remove: 'bg-second',
    })
    .add({ condition: className, className, alwaysPrimary: true })
    .addPrimary('bg-first')

  return (
    <button
      ref={ref}
      type="button"
      className={rootClasses.toClassNameString()}
      {...props}
    >
      {children}
    </button>
  )
}

export default withRipple(React.forwardRef(Button))
