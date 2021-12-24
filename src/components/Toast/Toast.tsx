import React from 'react'

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
}

export type ToastVariant = keyof typeof variants

export type ToastProps = {
  onClose: (index: number) => any
  duration: number
  render?: React.ReactNode
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
  const [mounted, setMounted] = React.useState(false)
  const onCloseRef = React.useRef(onClose)
  const handleClose = (_event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setMounted(false)
    setTimeout(() => {
      onCloseRef.current(id)
    }, 500)
  }

  React.useEffect(() => {
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

  React.useEffect(() => {
    setTimeout(() => setMounted(true), 100)
  }, [])

  React.useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  return (
    <div
      onClick={handleClose}
      className={`z-20 mr-4 mt-1 w-72 duration-500 transition-transform transform  ${
        mounted ? '' : 'translate-x-72'
      } overflow-hidden flex flex-col ${
        (variants as any)[variant]?.toast ?? variants.default.toast
      }`}
    >
      <div className="flex-grow px-2">{render}</div>
      <div
        className={`${
          (variants as any)[variant]?.progressBar ??
          variants.default.progressBar
        } ease-linear mt-2 h-1 w-full transition-transform transform ${
          mounted ? '-translate-x-full' : ''
        }`}
        style={{ transitionDuration: `${Math.round(duration / 1000)}s` }}
      />
    </div>
  )
}

export default Toast
