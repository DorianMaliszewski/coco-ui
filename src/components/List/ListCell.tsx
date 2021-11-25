import React from 'react'

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const ListCell = ({ className, ...props }: DivProps): JSX.Element => (
  <div className={['list-cell', className].join(' ')} {...props} />
)

export default ListCell
