import React from 'react'

export type TableRowProps = {
  hoverable?: boolean
  className?: string
  children: React.ReactNode
  isEven?: boolean
  onClick?: () => any
}
const TableRow = ({
  children,
  hoverable,
  className,
  isEven,
  ...props
}: TableRowProps): JSX.Element => {
  let classes = ''
  if (hoverable)
    classes += !isEven
      ? 'hover:bg-gray-200 cursor-pointer'
      : 'hover:bg-gray-200 cursor-pointer'

  return (
    <tr
      className={`${classes} ${
        isEven === undefined ? '' : !isEven ? 'bg-gray-100' : 'bg-background'
      } ${className ?? ''}`.trim()}
      {...props}
    >
      {children}
    </tr>
  )
}

export default TableRow
