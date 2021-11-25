import React from 'react'

type TableHeadProps = {
  columns?: { name: string; className?: string }[]
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
          {columns.map((column) => (
            <th
              className={['table-head', column.className].join(' ')}
              key={column.name}
            >
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
    )

  return <thead {...props}>{children}</thead>
}

export default TableHead
