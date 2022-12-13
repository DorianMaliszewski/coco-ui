import clsx from 'clsx'
import React, {
  ComponentProps,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Alert } from '../Alert'

const classes: {
  progressBar: {
    base: string
    default: string
    variants: Record<
      NonNullable<ComponentProps<typeof Alert>['variant']>,
      string
    >
  }
} = {
  progressBar: {
    base: 'absolute bottom-0 left-0 w-full h-1 ease-linear opacity-30',
    default: 'bg-base-content',
    variants: {
      error: 'bg-error-content',
      info: 'bg-info-content',
      success: 'bg-success-content',
      warning: 'bg-warning-content',
    },
  },
}

export type ToastProps = {
  onClose: (index: number) => any
  duration: number
  children?: ReactNode
  variant: ComponentProps<typeof Alert>['variant']
  id: number
}

const Toast = ({
  onClose,
  duration,
  children,
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
    onCloseRef.current(id)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(false)
      onCloseRef.current(id)
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

  const computedProgressBarClassName = useMemo(() => {
    const variantClasses = variant
      ? classes.progressBar.variants[variant]
      : undefined

    return clsx(
      classes.progressBar.base,
      variantClasses ?? classes.progressBar.default
    )
  }, [variant])

  return (
    <Alert
      className="relative overflow-hidden cursor-pointer"
      onClick={handleClose}
      variant={variant}
    >
      {children}
      <div
        className={clsx(computedProgressBarClassName)}
        style={{
          transitionDuration: `${Math.round(duration / 1000)}s`,
          width: mounted ? 0 : undefined,
        }}
      />
    </Alert>
  )
}

export default Toast
