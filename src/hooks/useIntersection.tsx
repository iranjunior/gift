import React, { useEffect, useState } from 'react'

export const useIntersection = (
  element: React.MutableRefObject<Element>,
  rootMargin: string,
  initAnimation?: boolean
) => {
  const x = element?.current?.getBoundingClientRect()

  const [isVisible, setState] = useState(x ? x.top - x.height > 0 : false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting)
        initAnimation &&
          entry.isIntersecting &&
          entry.target.classList.add('animate-slide')
      },
      { rootMargin }
    )

    element.current && observer.observe(element.current)

    return () => observer.unobserve(element.current)
  }, [])

  return isVisible
}
