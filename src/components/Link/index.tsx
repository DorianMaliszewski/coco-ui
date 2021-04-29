import React from 'react'

export interface LinkProps {
  as?: string
  className: string
  children: React.ReactNode
  to: string
}

const Link = ({ className, children, ...props }: LinkProps): JSX.Element => {
  return (
    <button
      role="link"
      className={'text-primary-600 font-bold underline ' + className}
      {...props}
    >
      {children}
    </button>
  )
}

Link.defaultProps = {
  className: '',
} as Partial<LinkProps>

export default Link
