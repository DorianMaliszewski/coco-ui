import React from 'react'

export type TableRowProps = {
  hoverable?: boolean
  className?: string
  children: React.ReactNode
  isEven?: boolean
}
const TableRow = ({
  children,
  hoverable,
  className,
  isEven,
  ...props
}: TableRowProps) => {
  let classes = ''
  if (hoverable)
    classes += !isEven
      ? 'hover:bg-gray-200 cursor-pointer'
      : 'hover:bg-gray-200 cursor-pointer'
  return (
    <tr
      className={`${classes} ${!isEven && 'bg-gray-100'} ${className}`}
      {...props}
    >
      {children}
    </tr>
  )
}

export default TableRow
