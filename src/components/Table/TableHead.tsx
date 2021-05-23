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
        <tr className="bg-primary-600 text-white uppercase text-sm leading-normal">
          {columns.map((column, index) => (
            <th className={`py-3 px-6`} key={index}>
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
      className: `bg-primary-600 text-white uppercase text-sm leading-normal ${
        child.props.className ?? ''
      }`,
    })
  })
  return <thead {...props}>{finalRows}</thead>
}

export default TableHead
