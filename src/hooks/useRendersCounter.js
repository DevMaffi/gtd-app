import { useEffect, useRef } from 'react'

function useRendersCounter() {
  const counter = useRef(0)

  useEffect(() => {
    counter.current++
  })

  return counter.current
}

export default useRendersCounter
