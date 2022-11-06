import { useRef } from 'react'
import RootClasses from 'utils/rootClasses'

export interface WithRippleProps {
  ripple?: boolean
}

export type WithRippleReturnType<T> = React.FC<
  WithRippleProps & Omit<T, keyof WithRippleProps>
>

const withRipple =
  <R extends HTMLElement, P extends { className?: string }>(
    Component: React.FC<any>
  ): WithRippleReturnType<P> =>
  ({ ripple, className, ...restProps }) => {
    const ref = useRef<R>(null)

    const rootClasses = new RootClasses('ripple').add({
      condition: !!className,
      type: 'extra',
      className: className ?? '',
    })

    const addRipple = (e: React.MouseEvent<HTMLDivElement>): void => {
      if (ripple) {
        const target = e.target as HTMLDivElement
        const x = e.clientX - target.offsetLeft
        const y = e.clientY - target.offsetTop

        const ripple = document.createElement('span') as HTMLSpanElement
        ripple.style.left = `${x}px`
        ripple.style.top = `${y}px`

        ripple.classList.add('ripple__blink')

        ripple.addEventListener('animationend', () => ripple.remove())

        ref.current?.appendChild(ripple)
      }
    }

    return (
      <div onClick={addRipple}>
        <Component
          ref={ref}
          className={rootClasses.toClassNameString()}
          {...restProps}
        />
      </div>
    )
  }

export default withRipple
