import React from 'react'
import { XIcon } from '@heroicons/react/solid'
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

type DrawerPosition = 'top' | 'right' | 'bottom' | 'left'
const animations = {
  slide: (open = false, position: DrawerPosition = 'left') => {
    switch (position) {
      case 'top':
        return `transition-transform duration-300 transform ${
          open ? 'translate-y-80' : '-translate-y-80'
        }`
      case 'right':
        return `transition-transform duration-300 transform ${
          open ? '-translate-x-80' : 'translate-x-80'
        }`
      case 'bottom':
        return `transition-transform duration-300 transform ${
          open ? '-translate-y-80' : 'translate-y-80'
        }`
      case 'left':
        return `transition-transform duration-300 transform ${
          open ? 'translate-x-80' : '-translate-x-80'
        }`
    }
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
      className={
        isVisible
          ? `z-100 fixed left-0 top-0 bg-opacity-20 bg-foreground w-full h-full`
          : `sr-only`
      }
    >
      <div
        onDoubleClick={(e) => e.stopPropagation()}
        className={`bg-background fixed ${
          positions[position]?.container
        } p-2 shadow ${animations.slide(open, position)}`}
      >
        {isVisible ? (
          <>
            {hasCloseButton && (
              <XIcon
                className={`${positions[position]?.closeButton} stroke-current fill-current text-foreground stroke-0 p-2 w-8 h-8 bg-background shadow-xl overflow-hidden rounded-full`}
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
      className={`z-10 bg-background fixed ${
        positions[position]?.container
      } p-2 shadow ${animations.slide(open, position)}`}
    >
      {isVisible ? (
        <>
          {hasCloseButton && (
            <XIcon
              className={`${positions[position]?.closeButton} stroke-current fill-current text-foreground stroke-0 p-2 w-8 h-8 bg-background shadow-xl overflow-hidden rounded-full`}
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
