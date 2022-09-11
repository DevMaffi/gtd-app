import { useRef } from 'react'

function Button({ children, arrow, className, onClick, ripple, ...props }) {
  const ref = useRef(null)
  const rootClasses = ['button', 'text-light']

  if (arrow) rootClasses.push('button--arrow bg-container-light')
  else rootClasses.push('bg-grade')

  if (className) rootClasses.push(className)

  const addRipple = e => {
    const x = e.clientX - e.target.offsetLeft
    const y = e.clientY - e.target.offsetTop

    const ripple = document.createElement('span')
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`

    ripple.addEventListener('animationend', () => ripple.remove())

    ref.current.appendChild(ripple)
  }

  return (
    <button
      ref={ref}
      type="button"
      onClick={e => {
        if (ripple) addRipple(e)
        if (onClick) onClick(e)
      }}
      className={rootClasses.join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
