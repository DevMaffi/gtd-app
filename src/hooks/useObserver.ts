import { useEffect, useRef } from 'react'

export interface UseObserverProps {
  ref: React.RefObject<Element>
  onEnter: () => void
  onLeave: () => void
}

const useObserver = ({ ref, onEnter, onLeave }: UseObserverProps): void => {
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (observer.current) observer.current.disconnect()

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
