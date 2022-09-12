import { useRef } from 'react'

function withRipple(Component) {
  return function ({ ripple, className, ...props }) {
    const ref = useRef(null)

    const rootClasses = ['ripple']

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

    if (className) rootClasses.push(className)

    return (
      <div onClick={addRipple}>
        <Component ref={ref} className={rootClasses.join(' ')} {...props} />
      </div>
    )
  }
}

export default withRipple
