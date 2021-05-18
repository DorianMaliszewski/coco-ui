import React from 'react'

export type useTableStateProps = {
  data: any[]
  initialSort?: { field: string; order: 'asc' | 'desc' }
}

export type useTableStateResult = {
  data: any[]
  sort?: { field: string; order: 'asc' | 'desc' }
  onSort: (field: string, order: 'asc' | 'desc') => any
}

const sortData = (data: any[], field: string, order = 'asc') => {
  const sortedData: any[] = [
    ...data.sort((currentRow, nextRow) =>
      typeof currentRow[field] === 'number'
        ? currentRow[field] - nextRow[field]
        : `${currentRow[field]}`.localeCompare(nextRow[field])
    ),
  ]

  return order === 'asc' ? sortedData : sortedData.reverse()
}

export const useTableState = ({
  data,
  initialSort,
}: useTableStateProps): useTableStateResult => {
  const [state, setState] = React.useState({
    data,
    sort: initialSort,
  })

  const onSort = (field: string, order: 'asc' | 'desc') => {
    setState({
      data: sortData(data, field, order),
      sort: {
        field,
        order,
      },
    })
  }

  React.useEffect(() => {
    setState({
      ...state,
      data: state.sort?.field
        ? sortData(data, state.sort.field, state.sort?.order)
        : data,
    })
  }, [data])

  return {
    ...state,
    onSort,
  }
}

export default useTableState
