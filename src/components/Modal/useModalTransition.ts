import React from 'react'
import { ModalState } from './helpers'

type useModalTransitionProps = {
  defaultOpen: boolean | undefined
  onOpenDuration: number
  onCloseDuration?: number
  callbacks: {
    opened?: () => void | undefined
    opening?: () => void | undefined
    closed?: () => void | undefined
    closing?: () => void | undefined
  }
}

type useModalTransitionState = {
  state: ModalState
  open: () => void
  close: () => void
  isOpen: boolean
  isClose: boolean
}
const useModalTransition = ({
  defaultOpen = false,
  onOpenDuration = 0,
  onCloseDuration,
  callbacks,
}: useModalTransitionProps): useModalTransitionState => {
  const [state, setState] = React.useState<ModalState>('closed')

  const open = React.useCallback(() => {
    setState('opening')
    callbacks.opening?.()
    setTimeout(() => {
      setState('opened')
      callbacks.opened?.()
    }, onOpenDuration)
  }, [onOpenDuration, callbacks])

  const close = React.useCallback(() => {
    setState('closing')
    callbacks.closing?.()
    setTimeout(() => {
      setState('closed')
      callbacks.closed?.()
    }, onCloseDuration ?? onOpenDuration)
  }, [onCloseDuration, onOpenDuration, callbacks])

  React.useEffect(() => {
    if (defaultOpen) {
      setState('opened')
    } else {
      setState('closed')
    }
  }, [defaultOpen])

  return {
    state,
    open,
    close,
    isOpen: ['opening', 'opened'].includes(state),
    isClose: ['closing', 'closed'].includes(state),
  }
}

export default useModalTransition
