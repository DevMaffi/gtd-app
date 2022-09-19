import React from 'react'
import withRipple from 'hoc/withRipple'
import './button.sass'

function Button({ children, arrow, pill, className, ...props }, ref) {
  const rootClasses = ['button', 'text-light']

  if (arrow) rootClasses.push('button--arrow flex bg-container-light')

  if (pill) rootClasses.push('button--pill flex bg-container-light fs-200')

  if (!arrow && !pill) rootClasses.push('bg-first')

  if (className) rootClasses.push(className)

  return (
    <button
      ref={ref}
      type="button"
      className={rootClasses.join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export default withRipple(React.forwardRef(Button))
