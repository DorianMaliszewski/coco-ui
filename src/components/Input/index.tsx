import clsx from 'clsx'
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  InputHTMLAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  useMemo,
} from 'react'

const VARIANTS = {
  inside: {
    container: {
      base: `relative text-gray-500 focus-within:text-primary-700`,
      disabled: `opacity-30 select-none pointer-events-none cursor-not-allowed`,
    },
    label: {
      base: `absolute px-2 py-1 text-xs`,
      error: `text-error-600`,
    },
    input: {
      base: `border p-2 pt-5 rounded outline-none`,
      default: `border focus:border-primary-600 focus:ring-2 ring-primary-200 text-black`,
      error: `border border-error-600 text-error-600 focus:ring-1 focus:ring-error-300`,
    },
  },
  outside: {
    container: {
      base: `flex flex-col text-gray-500 focus-within:text-primary-700`,
      disabled: `opacity-30 select-none pointer-events-none cursor-not-allowed`,
    },
    label: {
      base: `px-2 top-1 left-0 text-xs`,
      error: `text-error-600`,
    },
    input: {
      base: `border p-2 rounded outline-none`,
      error: `border-error-600 text-error-600 focus:ring-1 focus:ring-error-300`,
      default: `focus:border-primary-600 focus:ring-2 ring-primary-200 text-black`,
    },
  },
  default: {
    input: {
      base: `border p-2 rounded outline-none`,
      disabled: `opacity-30 select-none pointer-events-none cursor-not-allowed`,
      error: `border-error-600 text-error-600 focus:ring-1 focus:ring-error-300`,
      default: `focus:border-primary-600 text-error-600 focus:ring-2 ring-primary-200 text-black`,
    },
  },
} as const

const classes = {
  container: 'form-control',
  input: 'input input-bordered',
  label: 'label',
  labelText: 'label-text',
  inputError: 'input-error',
  sizes: {
    xs: 'input-xs',
    sm: 'input-sm',
    md: 'input-md',
    lg: 'input-lg',
  },
} as const

export type InputProps = {
  label?: string
  error?: string | boolean
  type?: string
  required?: boolean
  disabled?: boolean
  name?: string
  id?: string
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  onClick?: MouseEventHandler<HTMLInputElement>
  className?: string
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>
  placeholder?: string
  value?: string | number
  autoComplete?: string
  autoCorrect?: string
  inputMode?:
    | 'text'
    | 'none'
    | 'search'
    | 'email'
    | 'tel'
    | 'numeric'
    | 'decimal'
    | 'url'
  pattern?: string
  autoCapitalize?: string
  min?: number
  max?: number
  maxLength?: number
  minLength?: number
  step?: number
  readOnly?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, className, error, ...props }, ref): JSX.Element =>
    label ? (
      <div className={clsx(classes.container, className)}>
        <label htmlFor={id} className={classes.label}>
          <span className={classes.labelText}>{label}</span>
        </label>
        <input
          className={clsx(classes.input, error && classes.inputError)}
          {...props}
          ref={ref}
          id={id}
        />
        {error && typeof error === 'string' ? (
          <span className="label-text-alt">{error}</span>
        ) : null}
      </div>
    ) : (
      <div className={classes.container}>
        <input
          className={clsx(classes.input, error && classes.inputError)}
          {...props}
          ref={ref}
          id={id}
          aria-label={label}
        />
        {error && typeof error === 'string' ? (
          <span className="label-text-alt text-error">{error}</span>
        ) : null}
      </div>
    )
)

Input.defaultProps = {
  type: 'text',
}

Input.displayName = 'Input'

export default Input
