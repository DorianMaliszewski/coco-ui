import React from 'react'
import GridItem from './GridItem'

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  autoCols?: string
  autoRows?: string
  cols?: number | 'none'
  rows?: number | 'none'
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
  className,
  ...props
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

  return (
    <div className={`${gridClassNames} ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

Grid.Item = GridItem

export default Grid
