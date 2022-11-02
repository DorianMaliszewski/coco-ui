import React from 'react'
import { XIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
const positions = {
  top: {
    container: '-top-80 left-0 w-full h-64',
    closeButton: `absolute -bottom-10 right-2`,
  },
  right: {
    container: '-right-80 top-0 w-64 h-full',
    closeButton: `absolute top-2 -left-10`,
  },
  bottom: {
    container: '-bottom-80 left-0 w-full h-64',
    closeButton: `absolute right-2 -top-10`,
  },
  left: {
    container: '-left-80 top-0 w-64 h-full',
    closeButton: `absolute top-2 -right-10`,
  },
}

const classes = {
  backdrop: `z-10 fixed left-0 top-0 bg-opacity-30 bg-base-100 w-full h-full`,
  containerWithBackdrop: `bg-base-100 fixed p-2 shadow`,
  containerWithoutBackgrop: `z-10 bg-base-100 fixed p-2 shadow`,
  closeButton: `stroke-current fill-current text-foreground stroke-0 p-2 w-8 h-8 bg-base-100 shadow-xl overflow-hidden rounded-full`,
}

type DrawerPosition = 'top' | 'right' | 'bottom' | 'left'
const animations = {
  slide: (open = false, position: DrawerPosition = 'left') => {
    let sideClasses = ''
    switch (position) {
      case 'top':
        sideClasses = open ? 'translate-y-80' : '-translate-y-80'
        break
      case 'right':
        sideClasses = open ? '-translate-x-80' : 'translate-x-80'
        break
      case 'bottom':
        sideClasses = open ? '-translate-y-80' : 'translate-y-80'
        break
      case 'left':
        sideClasses = open ? 'translate-x-80' : '-translate-x-80'
        break
    }

    return clsx('transition-transform duration-300 transform', sideClasses)
  },
}

export interface DrawerProps {
  open: boolean
  onClose?: (event: React.MouseEvent) => void
  position: keyof typeof positions
  children?: React.ReactNode
  hasBackdrop?: boolean
  hasCloseButton?: boolean
}

const Drawer = ({
  children,
  open,
  hasBackdrop,
  hasCloseButton,
  position,
  onClose,
}: DrawerProps): JSX.Element => {
  const [isVisible, setIsVisible] = React.useState(open)
  React.useEffect(() => {
    const handler = setTimeout(
      () => {
        setIsVisible(open)
      },
      open ? 0 : 500
    )
    return () => clearTimeout(handler)
  }, [open])

  return hasBackdrop ? (
    <div
      onDoubleClick={onClose}
      className={isVisible ? classes.backdrop : `sr-only`}
    >
      <div
        onDoubleClick={(e) => e.stopPropagation()}
        className={clsx(
          classes.containerWithBackdrop,
          positions[position]?.container,
          animations.slide(open, position)
        )}
      >
        {isVisible ? (
          <>
            {hasCloseButton && (
              <XIcon
                className={clsx(
                  positions[position]?.closeButton,
                  classes.closeButton
                )}
                onClick={onClose}
                role="button"
              />
            )}
            {children}
          </>
        ) : null}
      </div>
    </div>
  ) : (
    <div
      className={clsx(
        positions[position]?.container,
        animations.slide(open, position),
        classes.containerWithoutBackgrop
      )}
    >
      {isVisible ? (
        <>
          {hasCloseButton && (
            <XIcon
              className={clsx(
                positions[position]?.closeButton,
                classes.closeButton
              )}
              onClick={onClose}
              role="button"
            />
          )}
          {children}
        </>
      ) : null}
    </div>
  )
}

Drawer.defaultProps = {
  open: false,
  position: 'right',
  hasBackdrop: false,
  hasCloseButton: true,
} as Partial<DrawerProps>

export default Drawer
