import { useRef, useState } from 'react'
import { useObserver } from 'hooks'

function withScrollHeader(Component) {
  return function ({ topOffset, ...props }) {
    const [scrollHeader, setScrollHeader] = useState(false)
    const firstElement = useRef(null)

    const onScrollHeader = value => () => setScrollHeader(value)

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
}

export default withScrollHeader
