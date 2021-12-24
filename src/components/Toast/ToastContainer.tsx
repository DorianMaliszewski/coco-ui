import React from 'react'

type ToastContainerProps = {
  children: React.ReactNode
}
const ToastContainer = ({ children }: ToastContainerProps): JSX.Element => {
  return (
    <div className="mr-1 py-2 fixed bottom-0 right-0 w-72 overflow-hidden flex flex-col-reverse z-100">
      {children}
    </div>
  )
}

export default ToastContainer
