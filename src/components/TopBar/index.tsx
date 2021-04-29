import injectClassNames from 'helpers/injectClassNames'
import React from 'react'

export interface TopBarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  children: React.ReactNode
}

const StyledTopBar = injectClassNames(
  'div'
)`fixed top-0 left-0 h-16 right-0 shadow-md px-3 flex items-center border-b border-primary-500`

const TopBar = ({ children, ...props }: TopBarProps): JSX.Element => (
  <StyledTopBar {...props}>{children}</StyledTopBar>
)

export default TopBar
