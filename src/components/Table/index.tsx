import React from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'
import TableRow from './TableRow'

export interface TableProps {
  children: React.ReactNode
  className?: string
  hoverable?: boolean
}
const Table = ({ children, className, hoverable, ...props }: TableProps) => {
  const finalChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child
    }
    const elementChild: React.ReactElement = child
    if (elementChild.type === TableBody) {
      return React.cloneElement(elementChild, {
        hoverable: elementChild.props.hoverable ?? hoverable,
      })
    }
    return child
  })
  return (
    <table
      className={'min-w-max w-full table-auto text-left ' + className}
      {...props}
    >
      {finalChildren}
    </table>
  )
}

Table.Head = TableHead
Table.Body = TableBody
Table.Row = TableRow

type TableCellProps = React.TdHTMLAttributes<any> & {
  children: React.ReactNode
}
const TableCell = ({ children, ...props }: TableCellProps) => (
  <td className="py-3 px-6" {...props}>
    {children}
  </td>
)

Table.Cell = TableCell

export default Table
