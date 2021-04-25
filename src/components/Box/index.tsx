import injectClassNames from 'helpers/injectClassNames'
import React from 'react'

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

const StyledBox = injectClassNames('div')`bg-white shadow rounded`
const Box = ({ children, className, ...props }: BoxProps) => {
  return (
    <StyledBox className={className} {...props}>
      {children}
    </StyledBox>
  )
}

Box.defaultProps = {
  className: 'p-2',
}

export default Box
