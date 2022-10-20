import { useRef, useState } from 'react'
import { useObserver } from 'hooks'

export interface WithScrollHeaderProps {
  topOffset: number
}

export interface IWithScrollHeader {
  scrollHeader: boolean
}

function withScrollHeader<T>(Component: any) {
  const WithScrollHeader: React.FC<WithScrollHeaderProps & T> = ({
    topOffset,
    ...props
  }) => {
    const [scrollHeader, setScrollHeader] = useState<boolean>(false)
    const firstElement = useRef<HTMLDivElement>(null)

    const onScrollHeader = (value: boolean) => () => setScrollHeader(value)

    useObserver(firstElement, onScrollHeader(false), onScrollHeader(true))

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
        <Component scrollHeader={scrollHeader} {...props} />
      </>
    )
  }

  return WithScrollHeader
}

export default withScrollHeader
