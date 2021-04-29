import injectClassNames from 'helpers/injectClassNames'
import React from 'react'

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

const StyledBox = injectClassNames(
  'div'
)`shadow dark:shadow-dark rounded text-foreground dark:text-background`
const Box = ({ children, className, ...props }: BoxProps): JSX.Element => {
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
