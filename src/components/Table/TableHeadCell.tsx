import Icon from 'components/Icon'
import React from 'react'
import { useTableStateResult } from './useTableState'

type TableHeadCellProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement> & {
  sortable?: string
  onSort?: (field: string, order: 'asc' | 'desc') => any
  sort?: { field: string; order: 'asc' | 'desc' }
}

const TableHeadCell = ({
  children,
  className = '',
  sortable,
  sort,
  onSort,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...props
}: TableHeadCellProps): JSX.Element => {
  const isCurrentSort = sort?.field === sortable
  const [isHover, setIsHover] = React.useState(false)
  return (
    <th
      onMouseEnter={(e) => {
        setIsHover(true)
        onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        setIsHover(false)
        onMouseLeave?.(e)
      }}
      className={`py-3 px-6 ${className} ${
        sortable ? 'cursor-pointer' : ''
      }`.trim()}
      onClick={(event) => {
        if (sortable) {
          onSort?.(
            sortable,
            isCurrentSort && (!sort?.order || sort?.order === 'asc')
              ? 'desc'
              : 'asc'
          )
        }
        onClick?.(event)
      }}
      {...props}
    >
      {sortable ? (
        <div className="relative flex items-center">
          <span>{children}</span>
          <div className="absolute right-0">
            {isCurrentSort ? (
              <Icon
                size={16}
                className="ml-1"
                name={
                  !sort?.order || sort?.order === 'asc'
                    ? 'sort-ascending'
                    : 'sort-descending'
                }
              />
            ) : null}
            {!isCurrentSort && isHover ? (
              <Icon size={16} className="ml-1" name="sort-ascending" />
            ) : null}
          </div>
        </div>
      ) : (
        children
      )}
    </th>
  )
}

export default TableHeadCell
