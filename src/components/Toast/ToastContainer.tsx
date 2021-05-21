import React from 'react'

type ToastContainerProps = {
  children: React.ReactNode
}
const ToastContainer = ({ children }: ToastContainerProps): JSX.Element => {
  return (
    <div className="z-20 mr-1 py-2 fixed bottom-0 right-0 w-72 overflow-hidden flex flex-col-reverse">
      {children}
    </div>
  )
}

export default ToastContainer
