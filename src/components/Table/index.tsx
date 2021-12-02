import React from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'
import TableHeadCell from './TableHeadCell'
import TableRow from './TableRow'
import './index.css'
export interface TableProps {
  children: React.ReactNode
  className?: string
}
const Table = ({ children, className, ...props }: TableProps): JSX.Element => (
  <table className={['table-container', className].join(' ')} {...props}>
    {children}
  </table>
)

Table.Head = TableHead
Table.HeadCell = TableHeadCell
Table.Body = TableBody
Table.Row = TableRow

interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode
}
const TableCell = (
  { children, className, ...props }: TableCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) => (
  <td ref={ref} className={[className].join(' ')} {...props}>
    {children}
  </td>
)

Table.Cell = React.forwardRef(TableCell)

export default Table
