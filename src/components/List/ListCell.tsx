import React, { PropsWithChildren } from 'react'

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const ListCell = (props: PropsWithChildren<DivProps>): JSX.Element => (
  <div {...props} />
)

export default ListCell
