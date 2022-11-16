import React, { MouseEventHandler, ReactNode, ReactPortal } from 'react'
import { XIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { createPortal } from 'react-dom'
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
  drawerContainer: (hasPortal?: boolean) =>
    hasPortal ? `` : `z-10 select-none`,
  backdrop: `fixed left-0 top-0 bg-opacity-30 bg-neutral-focus w-full h-full`,
  containerWithBackdrop: `bg-base-100 fixed p-2 shadow`,
  containerWithoutBackgrop: (hasPortal?: boolean) =>
    `${hasPortal ? '' : 'z-10'} bg-base-100 fixed p-2 shadow`,
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
  onClose?: MouseEventHandler<HTMLDivElement | SVGSVGElement>
  position: keyof typeof positions
  children?: ReactNode
  hasBackdrop?: boolean
  hasCloseButton?: boolean
  withoutPortal?: boolean
}

const Drawer = ({
  children,
  open,
  hasBackdrop,
  hasCloseButton,
  position,
  onClose,
  withoutPortal,
}: DrawerProps): JSX.Element | ReactPortal => {
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

  const modalRendered = hasBackdrop ? (
    <div
      onDoubleClick={onClose}
      className={isVisible ? classes.drawerContainer(withoutPortal) : `sr-only`}
    >
      <div className={isVisible ? classes.backdrop : `sr-only`}></div>
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
            {hasCloseButton ? (
              <XIcon
                className={clsx(
                  positions[position]?.closeButton,
                  classes.closeButton
                )}
                onClick={onClose}
                role="button"
              />
            ) : null}
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
        classes.containerWithoutBackgrop(withoutPortal)
      )}
    >
      {isVisible ? (
        <>
          {hasCloseButton ? (
            <XIcon
              className={clsx(
                positions[position]?.closeButton,
                classes.closeButton
              )}
              onClick={onClose}
              role="button"
            />
          ) : null}
          {children}
        </>
      ) : null}
    </div>
  )

  return withoutPortal
    ? modalRendered
    : createPortal(modalRendered, document.body)
}

Drawer.defaultProps = {
  open: false,
  position: 'right',
  hasBackdrop: false,
  hasCloseButton: true,
} as Partial<DrawerProps>

export default Drawer
