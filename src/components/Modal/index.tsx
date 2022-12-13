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
  disclosure: JSX.Element
  children: ((props: { close: () => void }) => JSX.Element) | ReactNode
  withoutPortal?: boolean
  hideOnClickOutside?: boolean
}

function Modal({
  disclosure,
  children,
  withoutPortal,
  hideOnClickOutside,
}: ModalProps): JSX.Element {
  const [open, setOpen] = useState(false)
  const ref = useRef<any>()

  useEffect(() => {
    const handleClick = () => {
      setOpen(true)
    }
    if (ref.current) {
      ;(ref.current as HTMLElement).addEventListener('click', handleClick)
    }

    return () => {
      if (ref.current) {
        ;(ref.current as HTMLElement).removeEventListener('click', handleClick)
      }
    }
  }, [ref])

  const Component = cloneElement(disclosure, {
    ref,
  })

  const close = () => {
    setOpen(false)
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
      {Component}
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
