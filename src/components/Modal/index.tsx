import { XIcon } from '@heroicons/react/outline'
import React from 'react'
import useModalTransition from './useModalTransition'
import {
  getModalClassNames,
  ModalAnimation,
  ModalPosition,
  ModalSize,
} from './helpers'

export interface ModalProps extends React.DialogHTMLAttributes<HTMLDivElement> {
  open?: boolean
  onClose: () => void
  children?: React.ReactNode
  closeOnOverlayDoubleClick?: boolean
  size?: ModalSize
  position?: ModalPosition
  animation?: ModalAnimation
  alwaysRender?: boolean
}
const Modal = ({
  animation = 'fade',
  open,
  onClose,
  children,
  size = 'md',
  position = 'center',
  closeOnOverlayDoubleClick = true,
  'aria-labelledby': ariaLabelledBy,
  'aria-label': ariaLabel,
  alwaysRender = false,
}: ModalProps): JSX.Element => {
  const modalState = useModalTransition({
    defaultOpen: open,
    onOpenDuration: 300,
    onCloseDuration: 300,
    callbacks: {
      closed: onClose,
    },
  })
  const onClickOutside = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (closeOnOverlayDoubleClick) modalState.close()
  }

  const classes = React.useMemo(
    () => getModalClassNames(animation, modalState.state, position, size),
    [modalState.state, position, size, animation]
  )

  return open || alwaysRender ? (
    <div
      className={`${classes.container}`}
      aria-labelledby={ariaLabelledBy}
      role="dialog"
      aria-label={ariaLabel ?? 'modal'}
      aria-modal="true"
    >
      <div
        onDoubleClick={onClickOutside}
        className={`${classes.background}`}
        aria-hidden="true"
      ></div>
      <div className={`${classes.modalContainer}`}>
        <div
          onDoubleClick={(event) => event.stopPropagation()}
          className={`${classes.modal}`}
        >
          <XIcon
            role="button"
            className={classes.closeButton}
            onClick={modalState.close}
          />
          {children}
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default Modal
