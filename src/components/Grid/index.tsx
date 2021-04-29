import React from 'react'
import GridItem from './GridItem'

export interface GridProps {
  autoCols?: string
  autoRows?: string
  cols?: number | string
  rows?: number | string
  flow?: string
  gap?: string | number
  children?: React.ReactNode
}
const Grid = ({
  cols,
  rows,
  gap,
  flow,
  autoCols,
  autoRows,
  children,
}: GridProps): JSX.Element => {
  let gridClassNames = 'grid'

  if (autoRows) {
    gridClassNames += ` auto-rows-${autoRows}`
  }
  if (autoCols) {
    gridClassNames += ` auto-cols-${autoCols}`
  }

  if (flow) {
    gridClassNames += ` grid-flow-${flow}`
  }

  if (cols) {
    gridClassNames += ` grid-cols-${cols}`
  }

  if (rows) {
    gridClassNames += ` grid-rows-${rows}`
  }

  if (gap) {
    gridClassNames += ` gap-${gap}`
  }

  return <div className={gridClassNames}>{children}</div>
}

Grid.Item = GridItem

export default Grid
