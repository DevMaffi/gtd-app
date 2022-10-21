import { useEffect, useRef } from 'react'
import { ArrowFn } from 'types'

export interface UseObserverProps {
  ref: React.RefObject<Element>
  onEnter: ArrowFn<void>
  onLeave: ArrowFn<void>
}

function useObserver({ ref, onEnter, onLeave }: UseObserverProps) {
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]): void => {
      if (entries[0].isIntersecting) return onEnter()
      onLeave()
    }

    observer.current = new IntersectionObserver(callback)
    if (ref.current) observer.current.observe(ref.current)

    return () => observer.current?.disconnect()
  }, [])
}

export default useObserver
