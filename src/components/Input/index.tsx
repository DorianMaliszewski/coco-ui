import classNames from 'classnames'
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
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

export type InputVariants = keyof typeof VARIANTS

export type InputProps = {
  label?: string
  variant?: InputVariants
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

type InternalInputProps = Omit<InputProps, 'variant'>

const InputLabelInside = forwardRef<HTMLInputElement, InternalInputProps>(
  (
    {
      label,
      disabled,
      className,
      error,
      id,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      onKeyDown,
      onKeyUp,
      placeholder,
      value,
      required,
      type,
      min,
      max,
      step,
      maxLength,
      minLength,
      pattern,
      autoCapitalize,
      autoComplete,
      autoCorrect,
      inputMode,
      readOnly,
    },
    ref
  ): JSX.Element => {
    const classes = VARIANTS.inside

    const containerClassNames = useMemo(
      () =>
        classNames({
          [classes.container.base]: true,
          [classes.container.disabled]: disabled,
          [className ?? '']: true,
        }),
      [className, disabled]
    )

    const labelClassNames = useMemo(
      () =>
        classNames({
          [classes.label.base]: true,
          [classes.label.error]: !!error,
        }),
      [error]
    )

    const inputClassNames = useMemo(
      () =>
        classNames({
          [classes.input.base]: true,
          [classes.input.default]: !error,
          [classes.input.error]: !!error,
        }),
      [error]
    )

    return (
      <label
        aria-disabled={disabled}
        aria-invalid={!!error}
        className={containerClassNames}
        htmlFor={id}
      >
        <span className={labelClassNames}>
          {label}
          {required ? <>&nbsp;*</> : null}
        </span>
        <input
          id={id}
          required={required}
          disabled={disabled}
          className={inputClassNames}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onClick={onClick}
          onFocus={onFocus}
          placeholder={placeholder}
          value={value}
          ref={ref}
          type={type}
          min={min}
          max={max}
          step={step}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          autoComplete={autoComplete}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          inputMode={inputMode}
          readOnly={readOnly}
        />
      </label>
    )
  }
)

const InputLabelOutside = forwardRef<HTMLInputElement, InternalInputProps>(
  (
    {
      label,
      disabled,
      className,
      error,
      id,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      onKeyDown,
      onKeyUp,
      placeholder,
      value,
      required,
      type,
      min,
      max,
      step,
      maxLength,
      minLength,
      pattern,
      autoCapitalize,
      autoComplete,
      autoCorrect,
      inputMode,
      readOnly,
    },
    ref
  ): JSX.Element => {
    const classes = VARIANTS.outside

    const containerClassNames = useMemo(
      () =>
        classNames({
          [classes.container.base]: true,
          [classes.container.disabled]: disabled,
          [className ?? '']: true,
        }),
      [className, disabled]
    )

    const labelClassNames = useMemo(
      () =>
        classNames({
          [classes.label.base]: true,
          [classes.label.error]: !!error,
        }),
      [error]
    )

    const inputClassNames = useMemo(
      () =>
        classNames({
          [classes.input.base]: true,
          [classes.input.default]: !error,
          [classes.input.error]: !!error,
        }),
      [error]
    )

    return (
      <label
        aria-disabled={disabled}
        aria-invalid={!!error}
        className={containerClassNames}
        htmlFor={id}
      >
        <span className={labelClassNames}>
          {label}
          {required ? <>&nbsp;*</> : null}
        </span>
        <input
          required={required}
          id={id}
          disabled={disabled}
          className={inputClassNames}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onClick={onClick}
          onFocus={onFocus}
          placeholder={placeholder}
          value={value}
          ref={ref}
          type={type}
          min={min}
          max={max}
          step={step}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          autoComplete={autoComplete}
          autoCorrect={autoCorrect}
          autoCapitalize={autoCapitalize}
          inputMode={inputMode}
          readOnly={readOnly}
        />
      </label>
    )
  }
)

const InputDefault = forwardRef<HTMLInputElement, InternalInputProps>(
  (
    {
      label,
      disabled,
      className,
      error,
      id,
      name,
      onBlur,
      onChange,
      onClick,
      onKeyDown,
      onKeyUp,
      onFocus,
      placeholder,
      value,
      required,
      type,
      min,
      max,
      step,
      maxLength,
      minLength,
      pattern,
      autoCapitalize,
      autoComplete,
      autoCorrect,
      inputMode,
      readOnly,
    },
    ref
  ): JSX.Element => {
    const classes = VARIANTS.default

    const inputClassNames = useMemo(
      () =>
        classNames({
          [classes.input.base]: true,
          [classes.input.default]: !error && !disabled,
          [classes.input.error]: !!error && !disabled,
          [classes.input.disabled]: disabled,
          [className ?? '']: true,
        }),
      [error, disabled, className]
    )

    return (
      <input
        aria-label={label}
        aria-invalid={!!error}
        required={required}
        id={id}
        disabled={disabled}
        className={inputClassNames}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onClick={onClick}
        onFocus={onFocus}
        placeholder={placeholder}
        value={value}
        ref={ref}
        type={type}
        min={min}
        max={max}
        step={step}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        inputMode={inputMode}
        readOnly={readOnly}
      />
    )
  }
)

const variants: Record<InputVariants, typeof InputDefault> = {
  inside: InputLabelInside,
  outside: InputLabelOutside,
  default: InputDefault,
}

const Input = forwardRef<
  HTMLInputElement,
  InputProps & {
    variant?: InputVariants
  }
>(
  ({ variant = 'default', ...props }, ref): JSX.Element =>
    React.createElement(variants[variant] ?? variants.default, {
      ...props,
      ref,
    })
)

Input.defaultProps = {
  type: 'text',
  variant: 'default',
}

Input.displayName = 'Input'
InputDefault.displayName = 'Input'
InputLabelInside.displayName = 'Input'
InputLabelOutside.displayName = 'Input'
export default Input
