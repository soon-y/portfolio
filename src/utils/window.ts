import { useState, useEffect } from 'react'

export function useWindowSize() {
  const getSize = () => ({
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    windowHeight: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => setWindowSize(getSize())
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}


export function useWindowRatio() {
  const [ratio, setRatio] = useState(1)

  useEffect(() => {
    const update = () => {
      setRatio(window.innerWidth / window.innerHeight)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return ratio
}

export const isTouchDevice = () =>
  'ontouchstart' in window || navigator.maxTouchPoints > 0