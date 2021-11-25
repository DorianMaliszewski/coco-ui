import React from 'react'

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  hoverable?: boolean
  children?: React.ReactNode
}

const TableRow = (
  { children, hoverable, className, ...props }: TableRowProps,
  ref: React.ForwardedRef<HTMLTableRowElement>
): JSX.Element => (
  <tr
    ref={ref}
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

export default React.forwardRef(TableRow)
