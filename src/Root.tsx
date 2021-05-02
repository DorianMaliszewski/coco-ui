import React from 'react'

type RootProps = {
  children: React.ReactNode
}
const Root = ({ children }: RootProps): JSX.Element => {
  return <div className="flex">{children}</div>
}

export default Root
