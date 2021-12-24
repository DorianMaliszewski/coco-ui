import classNames from 'classnames'
import React, {
  ReactNode,
  SyntheticEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

const BASE_TOAST_CLASSNAMES =
  'z-20 mr-4 mt-1 w-72 duration-500 transition-transform transform overflow-hidden flex flex-col'
const BASE_PROGRESSBAR_CLASSNAMES =
  'ease-linear mt-2 h-1 w-full transition-transform transform'
const variants = {
  default: {
    toast: 'shadow bg-white rounded pt-2 text-black',
    progressBar: 'bg-black',
  },
  success: {
    toast: 'shadow bg-success-600 rounded pt-2 text-white',
    progressBar: 'bg-white opacity-50',
  },
  error: {
    toast: 'shadow bg-error-600 rounded pt-2 text-white',
    progressBar: 'bg-white opacity-50',
  },
  warning: {
    toast: 'shadow bg-warning-500 rounded pt-2 text-white',
    progressBar: 'bg-white opacity-50',
  },
  info: {
    toast: 'shadow bg-info-600 rounded pt-2 text-white',
    progressBar: 'bg-white opacity-50',
  },
} as const

export type ToastVariant = keyof typeof variants

export type ToastProps = {
  onClose: (index: number) => any
  duration: number
  render?: ReactNode
  variant: ToastVariant
  id: number
}

const Toast = ({
  onClose,
  duration,
  render,
  variant,
  id,
}: ToastProps): JSX.Element => {
  const [mounted, setMounted] = useState(false)
  const onCloseRef = useRef(onClose)
  const handleClose = (_event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setMounted(false)
    setTimeout(() => {
      onCloseRef.current(id)
    }, 500)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(false)
      setTimeout(() => {
        onCloseRef.current(id)
      }, 500)
    }, duration)

    return () => {
      clearTimeout(timeout)
    }
  }, [duration])

  useEffect(() => {
    setTimeout(() => setMounted(true), 100)
  }, [])

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  const classes = useMemo(() => variants[variant] ?? variants.default, [
    variant,
  ])

  return (
    <div
      onClick={handleClose}
      className={classNames(
        BASE_TOAST_CLASSNAMES,
        {
          'translate-x-72': mounted,
        },
        classes.toast
      )}
    >
      <div className="flex-grow px-2">{render}</div>
      <div
        className={classNames(
          BASE_PROGRESSBAR_CLASSNAMES,
          classes.progressBar,
          {
            '-translate-x-full': mounted,
          }
        )}
        style={{ transitionDuration: `${Math.round(duration / 1000)}s` }}
      />
    </div>
  )
}

export default Toast
