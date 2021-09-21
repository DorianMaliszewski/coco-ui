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
}: TableRowProps): JSX.Element => (
  <tr
    className={[
      'table-body-row',
      hoverable ? 'hoverable' : undefined,
      className,
    ].join(' ')}
    {...props}
  >
    {children}
  </tr>
)

export default TableRow
