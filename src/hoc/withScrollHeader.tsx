import { useRef, useState } from 'react'
import { useObserver } from 'hooks'

export interface WithScrollHeaderProps {
  topOffset?: number
}

export interface WithScrollHeaderComponentProps {
  scrollHeader: boolean
}

export type WithScrollHeaderReturnType<T> = React.FC<
  WithScrollHeaderProps & Omit<T, keyof WithScrollHeaderProps>
>

const withScrollHeader =
  <T extends {} = {}>(
    Component: React.FC<any>
  ): WithScrollHeaderReturnType<T> =>
  ({ topOffset = 20, ...restProps }) => {
    const [scrollHeader, setScrollHeader] = useState<boolean>(false)
    const firstElement = useRef<HTMLDivElement>(null)

    const onScrollHeader = (value: boolean) => () => setScrollHeader(value)

    useObserver({
      ref: firstElement,
      onEnter: onScrollHeader(false),
      onLeave: onScrollHeader(true),
    })

    return (
      <div style={{ position: 'relative' }}>
        <div
          ref={firstElement}
          style={{
            height: topOffset,
            position: 'absolute',
            top: 0,
          }}
        ></div>
        <Component scrollHeader={scrollHeader} {...restProps} />
      </div>
    )
  }

export default withScrollHeader
