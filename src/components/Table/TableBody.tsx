import React from 'react'

type RowRenderFn = (renderProps: { row: any }) => React.ReactNode
export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode | RowRenderFn
}

const TableBody = (
  { children, ...props }: TableBodyProps,
  ref: React.ForwardedRef<HTMLTableSectionElement>
): JSX.Element => (
  <tbody ref={ref} {...props}>
    {children}
  </tbody>
)

export default React.forwardRef(TableBody)
