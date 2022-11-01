import React, {
  cloneElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import Button from '../Button'

export type ModalProps = {
  disclosure: JSX.Element
  children: (props: { close: () => void }) => JSX.Element
}

function Modal({ disclosure, children }: ModalProps): JSX.Element {
  const [open, setOpen] = useState(false)
  const portalElement = document.getElementById('modals')
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

  const close = useCallback(() => {
    setOpen(false)
  }, [])

  const modalContentRendered = useMemo(
    () => (
      <div
        onDoubleClick={close}
        className={
          open ? 'modal visible opacity-100 pointer-events-auto' : 'sr-only'
        }
      >
        <div
          onDoubleClick={(event) => {
            event.stopPropagation()
          }}
          role="dialog"
          className="modal-box relative"
        >
          <Button
            onClick={close}
            variant="ghost"
            size="sm"
            className="absolute right-2 top-2"
          >
            ✕
          </Button>
          {children({ close })}
        </div>
      </div>
    ),
    [open, children, close]
  )

  return (
    <>
      {Component}
      {portalElement
        ? createPortal(modalContentRendered, portalElement)
        : modalContentRendered}
    </>
  )
}

function ModalActions({ children }: { children: ReactNode }) {
  return <div className="modal-action">{children}</div>
}

Modal.Actions = ModalActions

export default Modal
