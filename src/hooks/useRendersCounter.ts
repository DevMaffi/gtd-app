import { useEffect, useRef } from 'react'

const useRendersCounter = (): number => {
  const counter = useRef<number>(0)

  useEffect(() => {
    counter.current++
  })

  return counter.current
}

export default useRendersCounter
