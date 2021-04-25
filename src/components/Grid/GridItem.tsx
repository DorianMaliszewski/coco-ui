import React from 'react'

export interface GridItemProps {
  colSpan?: number | string
  rowSpan?: number | string
  colStart?: number | string
  rowStart?: number | string
  colEnd?: number | string
  rowEnd?: number | string
  children?: React.ReactNode
}
const GridItem = ({
  children,
  colSpan,
  rowSpan,
  colStart,
  rowStart,
  colEnd,
  rowEnd,
}: GridItemProps) => {
  let itemClassNames = ''

  if (colSpan) {
    itemClassNames += ` col-span-${colSpan}`
  }
  if (rowSpan) {
    itemClassNames += ` row-span-${rowSpan}`
  }
  if (colStart) {
    itemClassNames += ` col-start-${colStart}`
  }
  if (rowStart) {
    itemClassNames += ` row-start-${rowStart}`
  }
  if (colEnd) {
    itemClassNames += ` col-end-${colEnd}`
  }
  if (rowEnd) {
    itemClassNames += ` row-end-${rowEnd}`
  }

  return <div className={itemClassNames}>{children}</div>
}

export default GridItem
