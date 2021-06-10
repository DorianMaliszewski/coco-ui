import React from 'react'

type LabelProps = {
  variant: 'inside' | 'outside'
  id?: string
  children: React.ReactNode
}
const Label = ({ variant, id, children }: LabelProps): JSX.Element => {
  return variant === 'inside' ? (
    <label
      htmlFor={id}
      className="text-xs text-gray-500 px-2 absolute top-0 left-0"
    >
      {children}
    </label>
  ) : (
    <label htmlFor={id} className="text-xs text-gray-500 px-2">
      {children}
    </label>
  )
}

export default Label
