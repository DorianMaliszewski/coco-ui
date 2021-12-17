import React from 'react'

const useClickOutsideHandler = (
  ref: React.RefObject<any>,
  callback: (event: MouseEvent | TouchEvent) => any
): void => {
  const callbackFnRef = React.useRef(callback)

  React.useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callbackFnRef.current?.(event)
      }
    }

    // Bind the event listener
    document.addEventListener('mouseup', handler)
    document.addEventListener('touchend', handler)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mouseup', handler)
      document.removeEventListener('touchend', handler)
    }
  }, [ref])

  React.useEffect(() => {
    callbackFnRef.current = callback
  }, [callback])
}

export default useClickOutsideHandler
