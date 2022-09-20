import { useRef } from 'react'
import RootClasses from 'utils/rootClasses'

function withRipple(Component) {
  return function ({ ripple, className, ...props }) {
    const ref = useRef(null)

    const rootClasses = new RootClasses('ripple').add({
      condition: className,
      type: 'extra',
      className,
    })

    const addRipple = e => {
      if (ripple) {
        const x = e.clientX - e.target.offsetLeft
        const y = e.clientY - e.target.offsetTop

        const ripple = document.createElement('span')
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`

        ripple.classList.add('ripple__blink')

        ripple.addEventListener('animationend', () => ripple.remove())

        ref.current.appendChild(ripple)
      }
    }

    return (
      <div onClick={addRipple}>
        <Component
          ref={ref}
          className={rootClasses.toClassNameString()}
          {...props}
        />
      </div>
    )
  }
}

export default withRipple
