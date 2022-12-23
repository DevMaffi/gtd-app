import { useRef } from 'react'
import { getOffset } from 'utils/offset'

export interface WithRippleProps {
  ripple?: boolean
}

export type WithRippleReturnType<T> = React.FC<
  WithRippleProps & Omit<T, keyof WithRippleProps>
>

const withRipple =
  <R extends HTMLElement, P extends {} = {}>(
    Component: React.FC<any>
  ): WithRippleReturnType<P> =>
  ({ ripple, ...restProps }) => {
    const ref = useRef<R>(null)

    const playRippleEffect = (e: React.MouseEvent<Element>): void => {
      if (!ripple) return

      const eventTarget = e.target as HTMLDivElement
      const rippleContainer = eventTarget.parentNode as Element

      let rippleElement: HTMLDivElement | null =
        rippleContainer.querySelector('.ripple')

      let circleElement: HTMLSpanElement =
        rippleElement?.querySelector('.ripple__circle')!

      if (!rippleElement) {
        rippleElement = document.createElement('div')
        rippleElement.classList.add('ripple')

        circleElement = document.createElement('span')
        circleElement.classList.add('ripple__circle')

        rippleElement.appendChild(circleElement)
        ref.current?.appendChild(rippleElement)
      }

      const offset = getOffset(rippleElement)
      const x = e.clientX - offset.left
      const y = e.clientY - offset.top

      circleElement.style.cssText = `
          top: ${y}px;
          left: ${x}px;
        `

      rippleElement.classList.add('active')
    }

    const rippleAnimationEndHandler = (
      e: React.AnimationEvent<HTMLSpanElement>
    ): void => {
      const eventTarget = e.target as HTMLSpanElement
      const rippleElement = eventTarget.parentNode as HTMLDivElement

      rippleElement.classList.remove('active')
    }

    return (
      <div
        onClick={playRippleEffect}
        onAnimationEnd={rippleAnimationEndHandler}
      >
        <Component ref={ref} {...restProps} />
      </div>
    )
  }

export default withRipple
