import React from 'react'

interface ILinkProps {
  as?: string
  className: string
  children: React.ReactNode
  to: string
}

const Link = ({ className, children, ...props }: ILinkProps) => {
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
} as Partial<ILinkProps>

export default Link
