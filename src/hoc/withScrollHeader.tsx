import { useRef, useState } from 'react'
import { useObserver } from 'hooks'

export interface WithScrollHeaderProps {
  topOffset: number
}

export interface IWithScrollHeader {
  scrollHeader: boolean
}

export type WithScrollHeaderReturnType<T> = React.FC<
  WithScrollHeaderProps & Omit<T, keyof WithScrollHeaderProps>
>

function withScrollHeader<T>(
  Component: React.FC<any>
): WithScrollHeaderReturnType<T> {
  const WithScrollHeader: WithScrollHeaderReturnType<T> = ({
    topOffset,
    ...restProps
  }) => {
    const [scrollHeader, setScrollHeader] = useState<boolean>(false)
    const firstElement = useRef<HTMLDivElement>(null)

    const onScrollHeader = (value: boolean) => () => setScrollHeader(value)

    useObserver({
      ref: firstElement,
      onEnter: onScrollHeader(false),
      onLeave: onScrollHeader(true),
    })

    return (
      <>
        <div
          ref={firstElement}
          style={{
            height: topOffset,
            position: 'absolute',
            top: 0,
          }}
        ></div>
        <Component scrollHeader={scrollHeader} {...restProps} />
      </>
    )
  }

  return WithScrollHeader
}

export default withScrollHeader
