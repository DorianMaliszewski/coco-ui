import classNames from 'classnames'
import React, { useMemo } from 'react'

type Sizes = 'xs' | 'sm' | 'md' | 'xl' | '2xl'

type Variants = 'primary' | 'outline' | 'no-border'

const SIZE_CLASSNAMES: Record<Sizes, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  xl: 'text-xl',
  '2xl': 'text-2xl',
}

const POPUP_CLASSNAMES = {
  container: 'shadow z-100 bg-background absolute left-0 min-w-full w-max mt-1',
  action: 'hover:bg-primary-100 cursor-pointer p-2',
}

const CLASSNAMES: Record<Variants, any> = {
  primary: {
    base: `cursor-pointer flex rounded items-center justify-center bg-primary-600 text-background p-2`,
    disabled: 'opacity-30 cursor-not-allowed',
    default:
      'hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-300',
  },
  outline: {
    base: `cursor-pointer rounded p-2 border border-primary-600 text-primary-600`,
    disabled: 'opacity-30 cursor-not-allowed',
    default:
      'hover:bg-primary-600 hover:text-background focus:outline-none focus:ring-2 focus:ring-primary-300',
  },
  'no-border': {
    base: 'cursor-pointer p-2 text-primary-600',
    disabled: 'opacity-30 cursor-not-allowed',
    default: 'focus:outline-none focus:ring-2 focus:ring-primary-300',
  },
}

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
  ) => (event: React.MouseEvent<HTMLDivElement>) => {
    childOnClick(event)
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

  const buttonClassNames = useMemo(() => {
    const classes = CLASSNAMES[variant] ?? CLASSNAMES.primary
    const sizeClasses = SIZE_CLASSNAMES[size] ?? SIZE_CLASSNAMES.md
    return classNames({
      [classes.base]: true,
      [classes.default]: !disabled,
      [classes.disabled]: disabled,
      [sizeClasses]: true,
      [className ?? '']: true,
    })
  }, [variant, size, className, disabled])

  return (
    <div ref={listRef} className="relative">
      <button
        disabled={disabled}
        onClick={() => setShowActions(true)}
        className={buttonClassNames}
        {...props}
      >
        {content}
      </button>
      <div
        className={classNames({
          [POPUP_CLASSNAMES.container]: true,
          block: showActions,
          'sr-only': !showActions,
        })}
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
    <div className={POPUP_CLASSNAMES.action} onClick={props.onClick}>
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
