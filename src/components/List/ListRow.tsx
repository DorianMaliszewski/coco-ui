import React, { PropsWithChildren } from 'react'
import { ListColumn, ListVariant } from '.'

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

type ListRowProps = DivProps & {
  columns?: ListColumn[]
  variant?: ListVariant
}

const ListRowCard = ({
  className,
  children,
  columns,
  ...props
}: PropsWithChildren<Omit<ListRowProps, 'variant'>>): JSX.Element => (
  <div
    className={[
      `list-row-card`,
      `grid-cols-${columns?.length || 1}`,
      className ?? '',
    ].join(' ')}
    {...props}
  >
    {children}
  </div>
)

const DefaultListRow = ({
  className,
  children,
  columns,
  ...props
}: PropsWithChildren<Omit<ListRowProps, 'variant'>>): JSX.Element => (
  <div
    className={[
      `list-row`,
      `grid-cols-${columns?.length || 1}`,
      className ?? '',
    ].join(' ')}
    {...props}
  >
    {children}
  </div>
)

const ListRow = ({
  variant,
  ...props
}: PropsWithChildren<ListRowProps>): JSX.Element => {
  const Component = React.useMemo(
    () =>
      variant
        ? {
            card: ListRowCard,
          }[variant] ?? DefaultListRow
        : DefaultListRow,
    [variant]
  )

  return React.createElement(Component, props)
}

export default ListRow
