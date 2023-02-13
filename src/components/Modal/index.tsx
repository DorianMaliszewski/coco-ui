import React, {
  cloneElement,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import Button from '../Button'

export type ModalProps = {
  disclosure?: JSX.Element
  children: ((props: { close: () => void }) => JSX.Element) | ReactNode
  withoutPortal?: boolean
  hideOnClickOutside?: boolean
  open?: boolean
  onClose?: () => void
}

function Modal({
  disclosure,
  children,
  withoutPortal,
  hideOnClickOutside,
  open: openProp,
  onClose,
}: ModalProps): JSX.Element {
  const [open, setOpen] = useState(openProp && onClose ? openProp : false)
  const ref = useRef<any>()

  useEffect(() => {
    if (!openProp && !onClose) {
      const handleClick = () => {
        setOpen(true)
      }
      if (ref.current) {
        ;(ref.current as HTMLElement).addEventListener('click', handleClick)
      }

      return () => {
        if (ref.current) {
          ;(ref.current as HTMLElement).removeEventListener(
            'click',
            handleClick
          )
        }
      }
    }

    console.log(open, openProp)
    if (onClose && openProp !== open) {
      setOpen(!!openProp)
    }
  }, [ref, openProp, onClose])

  const Component = disclosure
    ? cloneElement(disclosure, {
        ref,
      })
    : undefined

  const close = () => {
    if (onClose) {
      onClose()
    } else {
      setOpen(false)
    }
  }

  const modalContentRendered = useMemo(
    () => (
      <div
        onClick={hideOnClickOutside ? close : undefined}
        className={
          open ? 'modal visible opacity-100 pointer-events-auto' : 'sr-only'
        }
      >
        <dialog
          open={open}
          onClick={(event) => {
            event.stopPropagation()
          }}
          className="select-all modal-box relative"
        >
          <Button
            onClick={close}
            variant="ghost"
            size="sm"
            className="absolute right-2 top-2"
          >
            ✕
          </Button>
          {typeof children === 'function' ? children({ close }) : children}
        </dialog>
      </div>
    ),
    [open, children, close]
  )

  return (
    <>
      {Component ? Component : null}
      {withoutPortal
        ? modalContentRendered
        : createPortal(modalContentRendered, document.body)}
    </>
  )
}

function ModalActions({ children }: { children: ReactNode }) {
  return <div className="modal-action">{children}</div>
}

Modal.Actions = ModalActions

export default Modal
