import React from 'react'

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
        className: `table-body-row`,
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
      className: [`table-body-row`, child.props.className].join(' '),
    })
  })
  return <tbody {...props}>{finalRows}</tbody>
}

export default TableBody
