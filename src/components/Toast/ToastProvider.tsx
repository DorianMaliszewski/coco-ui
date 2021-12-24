import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import Toast, { ToastVariant } from './Toast'
import ToastContainer from './ToastContainer'

type ToastOptions = {
  variant: ToastVariant
  callback?: () => any
  duration: number
}
type ToastInfo = {
  render: ReactNode
  id: number
  closed: boolean
} & ToastOptions

export type ToastProviderProps = {
  children: any
  duration?: number
  maxConcurrent?: number
}

type ToastContextType = {
  show: (render: ReactNode, info: ToastOptions) => void
  success: (render: ReactNode, info: ToastOptions) => void
  error: (render: ReactNode, info: ToastOptions) => void
  info: (render: ReactNode, info: ToastOptions) => void
  warning: (render: ReactNode, info: ToastOptions) => void
}
const ToastContext = createContext<ToastContextType>({} as ToastContextType)

const ToastProvider = ({
  children,
  duration = 3000,
  maxConcurrent = 5,
}: ToastProviderProps): JSX.Element => {
  const counterRef = useRef(0)
  const [toasts, setToasts] = useState<ToastInfo[]>([])

  const show = useCallback(
    (render: ReactNode, info: ToastOptions) => {
      const newToast = {} as ToastInfo
      newToast.id = counterRef.current
      counterRef.current += 1
      newToast.callback = info.callback
      newToast.render = render
      newToast.closed = false
      newToast.variant = info.variant ?? 'default'
      newToast.duration = info.duration ?? duration
      setToasts((current) => [...current, newToast])
    },
    [duration]
  )

  const success = useCallback(
    (render: ReactNode, info: ToastOptions) => {
      show(render, { ...info, variant: 'success' })
    },
    [show]
  )

  const error = useCallback(
    (render: ReactNode, info: ToastOptions) => {
      show(render, { ...info, variant: 'error' })
    },
    [show]
  )

  const warning = useCallback(
    (render: ReactNode, info: ToastOptions) => {
      show(render, { ...info, variant: 'warning' })
    },
    [show]
  )

  const info = useCallback(
    (render: ReactNode, info: ToastOptions) => {
      show(render, { ...info, variant: 'info' })
    },
    [show]
  )

  const onCloseToast = useCallback(
    (toastId: number) => {
      const index = toasts.findIndex(({ id }) => id === toastId)
      if (index > -1) {
        toasts[index]?.callback?.()
        const tmp = [...toasts]
        tmp[index].closed = true
        setToasts(tmp)
      }
    },
    [toasts]
  )

  useEffect(() => {
    if (toasts.length && toasts.every(({ closed }) => closed)) {
      setToasts([])
    }
  }, [toasts])

  const value = useMemo(() => ({ show, error, success, info, warning }), [
    show,
    success,
    info,
    error,
    warning,
  ])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer>
        {toasts
          .filter(({ closed }) => !closed)
          .slice(0, maxConcurrent)
          .map((toast) => (
            <Toast
              id={toast.id}
              key={toast.id}
              duration={toast.duration}
              render={toast.render}
              variant={toast.variant}
              onClose={onCloseToast}
            />
          ))}
      </ToastContainer>
    </ToastContext.Provider>
  )
}

export const useToast = (): any => {
  return useContext(ToastContext)
}

export default ToastProvider
