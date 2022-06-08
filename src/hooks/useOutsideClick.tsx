import React, { useEffect } from 'react'

export const useOutsideClick = (
  ref: React.MutableRefObject<Element>,
  excluderef: Array<React.MutableRefObject<Element>>,
  callback: () => void
) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      console.log(
        excluderef.some(
          (ref) => ref.current && ref.current.contains(event.target as Node)
        )
      )

      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !excluderef.some(
          (ref) => ref.current && ref.current.contains(event.target as Node)
        )
      ) {
        callback()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}
