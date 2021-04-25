import React from 'react'

type TableHeadProps = {
  columns: { name: string }[]
}
const TableHead = ({ columns, ...props }: TableHeadProps) => {
  return (
    <thead {...props}>
      <tr className="bg-primary-500 text-white uppercase text-sm leading-normal">
        {columns.map((column, index) => (
          <th className={`py-3 px-6 ${index === 0 ? 'pl-5' : ''}`} key={index}>
            {column.name}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
