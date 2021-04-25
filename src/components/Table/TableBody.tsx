import React from 'react'
import TableRow from './TableRow'

type TableBodyProps = {
  data: any[]
  children: React.ReactNode
  hoverable?: boolean
}
const TableBody = ({ data, children, hoverable, ...props }: TableBodyProps) => {
  const finalRows = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child
    }
    const elementChild: React.ReactElement = child
    if (elementChild.type === TableRow) {
      return React.cloneElement(elementChild, {
        isEven: index % 2 === 0,
        hoverable: elementChild.props.hoverable ?? hoverable,
      })
    }
    return child
  })
  return <tbody {...props}>{finalRows}</tbody>
}

export default TableBody
