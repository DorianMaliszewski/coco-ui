import classNames from 'classnames'
import React from 'react'

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

const Box = ({ children, className, ...props }: BoxProps): JSX.Element => {
  return (
    <div
      className={classNames(
        'shadow rounded text-foreground dark:text-background',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Box.defaultProps = {
  className: 'p-2',
}

export default Box
