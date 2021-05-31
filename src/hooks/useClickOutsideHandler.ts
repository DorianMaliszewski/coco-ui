import React from 'react'

const useClickOutsideHandler = (
  ref: React.RefObject<any>,
  callback: () => any
): void => {
  const callbackFnRef = React.useRef(callback)

  React.useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callbackFnRef.current?.()
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [ref])

  React.useEffect(() => {
    callbackFnRef.current = callback
  }, [callback])
}

export default useClickOutsideHandler
