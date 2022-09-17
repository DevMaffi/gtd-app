import { useEffect, useRef } from 'react'

function useObserver(ref, onEnter, onLeave) {
  const observer = useRef(null)

  useEffect(() => {
    const callback = entries => {
      if (entries[0].isIntersecting) return onEnter()
      onLeave()
    }

    observer.current = new IntersectionObserver(callback)
    observer.current.observe(ref.current)

    return () => observer.current.disconnect()
  }, [])
}

export default useObserver
