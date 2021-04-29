import injectClassNames from 'helpers/injectClassNames'
import React from 'react'

const variants = {
  primary:
    'bg-primary-500 text-background hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-300',
  outline:
    'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-background focus:outline-none focus:ring-2 focus:ring-primary-300',
  'no-border': `text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-300`,
}
export interface ActionButtonProps {
  children: React.ReactNode
  className?: string
  variant: keyof typeof variants
}

const StyledButton = injectClassNames(
  'button'
)`flex p-3 rounded items-center justify-center`

const StyledButtonContent = injectClassNames(
  'div'
)`shadow z-10 bg-background absolute left-0 w-full top-full mt-1`

const ActionButton = ({
  children,
  className,
  variant,
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

  return (
    <div ref={listRef} className="relative">
      <StyledButton
        onClick={() => setShowActions(!showActions)}
        className={`${className ?? ''} ${variants[variant]}`}
        {...props}
      >
        {content}
      </StyledButton>
      <StyledButtonContent className={showActions ? 'block' : 'sr-only'}>
        {actions}
      </StyledButtonContent>
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
    <div
      className="p-2 hover:bg-primary-100 cursor-pointer"
      onClick={props.onClick}
    >
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
