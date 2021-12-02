import React from 'react'
import ListRow from './ListRow'
import ListCell from './ListCell'
import Icon from 'components/Icon'
import { ListColumn, ListSort, ListVariant } from './types'
import { ListContext } from './context'
import './index.css'

const variants = {
  card: ({ gap }: { gap: string | number }) => `gap-${gap}`,
}

const ListHeaders = ({
  columns,
  sortState,
  setSort,
}: {
  columns: ListColumn[]
  sortState: ListSort
  setSort: React.Dispatch<React.SetStateAction<ListSort>>
}): JSX.Element => {
  const handleSortClick = (index: number) => () => {
    if (sortState.index === index) {
      setSort((current) => ({
        ...current,
        order: current.order === 'asc' ? 'desc' : 'asc',
      }))
    } else {
      setSort({
        index,
        order: 'asc',
      })
    }
  }

  return (
    <div className={[`list-headers`].join(' ')}>
      {columns.map((column, index) => (
        <div
          onClick={column.sort ? handleSortClick(index) : undefined}
          className={[
            'list-cell flex items-center',
            column.sort ? 'cursor-pointer' : 'cursor-default',
            index === sortState.index ? 'text-primary-600' : 'text-gray-500',
            column.className,
          ].join(' ')}
          key={column.name}
        >
          <span className="mr-1 font-bold">{column.name}</span>
          {column.sort ? (
            <>
              {index === sortState.index ? (
                <Icon
                  size={16}
                  role="button"
                  name={
                    sortState.order === 'asc'
                      ? 'sort-ascending'
                      : 'sort-descending'
                  }
                />
              ) : (
                <Icon
                  role="button"
                  size={16}
                  onClick={handleSortClick(index)}
                  name="switch-vertical"
                />
              )}
            </>
          ) : null}
        </div>
      ))}
    </div>
  )
}

type ListChildrenRender<T = unknown> = ({ data }: { data: T[] }) => JSX.Element

export interface ListProps<T = unknown> {
  columns?: ListColumn[]
  data?: T[]
  children: ListChildrenRender<T>
  className?: string
  variant?: ListVariant
  gap?: string | number
}

const List = ({
  columns,
  data,
  children,
  className,
  variant = 'card',
  gap = 2,
}: ListProps): JSX.Element => {
  const [sort, setSort] = React.useState({} as ListSort)

  const sortedData = React.useMemo(() => {
    if (sort.index !== undefined) {
      const sorted = columns ? data?.sort(columns[sort.index]?.sort) : data
      return sort.order === 'desc' ? sorted?.reverse() : sorted
    }

    return data
  }, [sort, data, columns])

  const value = React.useMemo(
    () => ({
      columns,
      variant,
    }),
    [columns, variant]
  )

  return (
    <ListContext.Provider value={value}>
      <div
        className={['list', variants[variant]({ gap }), className ?? ''].join(
          ' '
        )}
      >
        {columns ? (
          <ListHeaders sortState={sort} setSort={setSort} columns={columns} />
        ) : null}
        {children({
          data: sortedData || [],
        })}
      </div>
    </ListContext.Provider>
  )
}

List.Cell = ListCell
List.Row = ListRow

export default List
