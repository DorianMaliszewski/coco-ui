import animations from 'helpers/animations'
import makeUUID from 'helpers/makeUUID'
import useDebounce from 'hooks/useDebounce'
import React from 'react'

type TooltipPosition = 'top' | 'right' | 'bottom' | 'left'
export interface TooltipProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string
  render?: React.ReactNode
  children?: React.ReactNode
  toolptipId?: string
  position?: TooltipPosition
}

const Tooltip = ({
  render,
  children,
  toolptipId,
  position = 'top',
}: TooltipProps): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false)
  const visible = useDebounce(isOpen, 200)
  const id = React.useMemo(() => toolptipId ?? makeUUID(), [toolptipId])
  const handlerRef = React.useRef<NodeJS.Timeout>()
  const handleOpen = () => {
    if (handlerRef.current) clearTimeout(handlerRef.current)

    if (!isOpen) {
      setIsOpen(true)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const positionClassNames = React.useMemo(() => {
    switch (position) {
      case 'right':
        return 'left-full ml-1'
      case 'left':
        return 'right-full mr-1'
      case 'bottom':
        return 'top-full mt-1'
      case 'top':
      default:
        return 'bottom-full mb-1'
    }
  }, [position])

  return (
    <div
      aria-describedby={id}
      className="relative flex"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <div className="flex">{children}</div>
      <div
        id={id}
        role="tooltip"
        className={`absolute bg-white shadow-xl p-2 border border-gray-200 rounded ${positionClassNames} ${animations.fadeIn(
          isOpen
        )} ${!visible && !isOpen && 'sr-only'}
        }`}
      >
        {render}
      </div>
    </div>
  )
}

export default Tooltip
