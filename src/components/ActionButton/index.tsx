import React, { useMemo } from 'react'

type Sizes = 'xs' | 'sm' | 'md' | 'xl' | '2xl'

type Variants = 'primary' | 'outline' | 'no-border'

export type ActionButtonProps = {
  children: React.ReactNode
  className?: string
  variant: Variants
  size?: Sizes
  disabled?: boolean
}

const ActionButton = ({
  children,
  className,
  disabled = false,
  variant = 'primary',
  size = 'md',
  ...props
}: ActionButtonProps): JSX.Element => {
  const [showActions, setShowActions] = React.useState(false)
  const listRef = React.useRef<HTMLDivElement>(null)
  const content: React.ReactNode[] = []
  const actions: React.ReactNode[] = []

  const handleActionClick = (
    childOnClick: React.MouseEventHandler<HTMLDivElement>
  ) => async (event: React.MouseEvent<HTMLDivElement>) => {
    await childOnClick(event)
    setShowActions(false)
  }

  React.useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (listRef?.current && listRef.current.contains(event.target as Node)) {
        event.stopPropagation()
      } else {
        setShowActions(false)
      }
    }
    document.addEventListener('click', clickHandler)
    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [])

  React.Children.forEach(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return child
    }
    const elementChild: React.ReactElement = child
    if (elementChild.type === ActionButton.Action) {
      actions.push(
        React.cloneElement(child, {
          key: child.key || index,
          onClick: child.props.onClick
            ? handleActionClick(child.props.onClick)
            : () => {
                setShowActions(false)
              },
        })
      )
    } else {
      content.push(child)
    }
  })

  const token = useMemo(() => `action-button--${variant}--${size}`, [
    variant,
    size,
  ])

  return (
    <div ref={listRef} className="relative">
      <button
        disabled={disabled}
        onClick={() => setShowActions(!showActions)}
        className={[token, className].join(' ')}
        {...props}
      >
        {content}
      </button>
      <div
        className={[
          'action-button-content',
          showActions ? 'block' : 'sr-only',
        ].join(' ')}
      >
        {actions}
      </div>
    </div>
  )
}

ActionButton.defaultProps = {
  variant: 'primary',
}

interface IActionProps {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
const Action = (props: IActionProps) => {
  return (
    <div className="action-button-action" onClick={props.onClick}>
      {props.children}
    </div>
  )
}

Action.displayName = 'ActionButton.Action'

interface IContentProps {
  children: React.ReactNode
}
const Content = (props: IContentProps) => {
  return <>{props.children}</>
}
Content.displayName = 'ActionButton.Content'

ActionButton.Content = Content
ActionButton.Action = Action

export default ActionButton
