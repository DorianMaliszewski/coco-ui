import Icon from 'components/Icon'
import React from 'react'

type TableHeadCellProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement> & {
  sortable?: string
  onSort?: (field: string, order: 'asc' | 'desc') => any
  sort?: { field: string; order: 'asc' | 'desc' }
}

const TableHeadCell = ({
  children,
  className,
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
        onMouseEnter?.(e)
        setIsHover(true)
      }}
      onMouseLeave={(e) => {
        onMouseLeave?.(e)
        setIsHover(false)
      }}
      className={[
        'table-head',
        sortable ? 'cursor-pointer relative' : '',
        className,
      ].join(' ')}
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
        <div className="table-head-cell">
          <span>{children}</span>
          {isCurrentSort ? (
            <Icon
              size={16}
              className="m-1"
              name={
                sort?.order === 'asc' ? 'sort-ascending' : 'sort-descending'
              }
            />
          ) : (
            <Icon
              size={16}
              className={['m-1', !isHover ? 'opacity-0' : undefined].join(' ')}
              name="sort-ascending"
            />
          )}
        </div>
      ) : (
        children
      )}
    </th>
  )
}

export default TableHeadCell
