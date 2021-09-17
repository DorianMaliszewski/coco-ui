import React from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'
import TableHeadCell from './TableHeadCell'
import TableRow from './TableRow'
import './index.css'

export interface TableProps {
  children: React.ReactNode
  className?: string
  hoverable?: boolean
  data?: any[]
}
const Table = ({
  children,
  className,
  hoverable,
  data,
  ...props
}: TableProps): JSX.Element => {
  const finalChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child
    }
    const elementChild: React.ReactElement = child
    if (elementChild.type === TableBody) {
      return React.cloneElement(elementChild, {
        hoverable: elementChild.props.hoverable ?? hoverable,
        data,
      })
    }
    return child
  })
  return (
    <table className={className ?? 'table-fixed'} {...props}>
      {finalChildren}
    </table>
  )
}

Table.Head = TableHead
Table.HeadCell = TableHeadCell
Table.Body = TableBody
Table.Row = TableRow

type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
  children: React.ReactNode
}
const TableCell = ({ children, className, ...props }: TableCellProps) => (
  <td className={['table-cell', className].join(' ')} {...props}>
    {children}
  </td>
)

Table.Cell = TableCell

export default Table
