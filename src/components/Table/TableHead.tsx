import React from 'react'

type TableHeadProps = {
  columns?: { name: string }[]
  children?: React.ReactNode
}
const TableHead = ({
  columns,
  children,
  ...props
}: TableHeadProps): JSX.Element => {
  if (columns)
    return (
      <thead {...props}>
        <tr className="table-head-row">
          {columns.map((column, index) => (
            <th className="table-head" key={index}>
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
    )

  const finalRows = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child
    }
    const elementChild: React.ReactElement = child
    return React.cloneElement(elementChild, {
      ...child.props,
      className: ['table-head-row', child.props.className].join(' '),
    })
  })
  return <thead {...props}>{finalRows}</thead>
}

export default TableHead
