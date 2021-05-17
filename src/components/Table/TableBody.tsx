import React from 'react'
import TableRow from './TableRow'

type RowRenderFn = (renderProps: { row: any }) => React.ReactNode
type TableBodyProps = {
  children: React.ReactNode | RowRenderFn
  hoverable?: boolean
  data?: any[]
}
const TableBody = ({
  children,
  hoverable,
  data,
  ...props
}: TableBodyProps): JSX.Element => {
  if (data && typeof children === 'function') {
    const finalRows = data.map((row, index) =>
      React.cloneElement(children({ row }), {
        key: index,
        isEven: index % 2 === 0,
        hoverable,
      })
    )
    return <tbody {...props}>{finalRows}</tbody>
  }

  const finalRows = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child
    }
    const elementChild: React.ReactElement = child
    return React.cloneElement(elementChild, {
      isEven: index % 2 === 0,
      hoverable: elementChild.props.hoverable ?? hoverable,
      ...child.props,
    })
  })
  return <tbody {...props}>{finalRows}</tbody>
}

export default TableBody
