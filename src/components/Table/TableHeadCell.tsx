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
        setIsHover(true)
        onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        setIsHover(false)
        onMouseLeave?.(e)
      }}
      className={`${className ?? 'py-3 px-6'} ${
        sortable ? 'cursor-pointer relative' : ''
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
        <>
          {children}
          <div className="bg-primary-600 rounded-full absolute top-1/2 transform -translate-y-1/2 right-1">
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
        </>
      ) : (
        children
      )}
    </th>
  )
}

export default TableHeadCell
