import { useEffect, useRef, useState } from 'react'

export default function CountUp({ end, suffix = '', duration = 2600 }) {
  const elementRef = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    let frameId
    const startCount = () => {
      cancelAnimationFrame(frameId)
      setValue(0)
      const startTime = performance.now()

      const animate = (time) => {
        const progress = Math.min((time - startTime) / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(end * easedProgress))
        if (progress < 1) frameId = requestAnimationFrame(animate)
      }

      frameId = requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        startCount()
      } else {
        cancelAnimationFrame(frameId)
        setValue(0)
      }
    }, { threshold: 0.25 })

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameId)
    }
  }, [duration, end])

  return <span ref={elementRef}>{value}{suffix}</span>
}
