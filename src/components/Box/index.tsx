import React from 'react'

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

const Box = ({ children, className, ...props }: BoxProps): JSX.Element => {
  return (
    <div className={['box', className].join(' ')} {...props}>
      {children}
    </div>
  )
}

Box.defaultProps = {
  className: 'p-2',
}

export default Box
