import React, { forwardRef } from 'react'
import { useListContext } from './context'

type ListRowProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const ListRowCard = ({
  className,
  children,
  innerRef,
  ...props
}: Omit<
  ListRowProps & { innerRef: React.ForwardedRef<HTMLDivElement> },
  'variant'
>): JSX.Element => (
  <div
    className={[`list-row-card`, className].join(' ')}
    ref={innerRef}
    {...props}
  >
    {children}
  </div>
)

const DefaultListRow = ({
  className,
  children,
  innerRef,
  ...props
}: Omit<
  ListRowProps & { innerRef: React.ForwardedRef<HTMLDivElement> },
  'variant'
>): JSX.Element => (
  <div className={[`list-row`, className].join(' ')} ref={innerRef} {...props}>
    {children}
  </div>
)

const ListRow = forwardRef(
  (
    props: ListRowProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const { variant } = useListContext()
    const innerRef = React.useRef<HTMLDivElement>(null)
    React.useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    const Component = React.useMemo(
      () =>
        variant
          ? {
              card: ListRowCard,
            }[variant] ?? DefaultListRow
          : DefaultListRow,
      [variant]
    )

    return React.createElement(Component, { ...props, innerRef })
  }
)

ListRow.displayName = 'ListRow'

export default ListRow
