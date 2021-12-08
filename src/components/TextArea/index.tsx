import classNames from 'classnames'
import React, { forwardRef, useMemo } from 'react'

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
      base: `border p-2 rounded outline-none resize`,
      disabled: `opacity-30 select-none pointer-events-none cursor-not-allowed`,
      error: `border-error-600 text-error-600 focus:ring-1 focus:ring-error-300`,
      default: `focus:border-primary-600 text-error-600 focus:ring-2 ring-primary-200 text-black`,
    },
  },
} as const

export type TextAreaVariants = keyof typeof VARIANTS

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  variant?: TextAreaVariants
  error?: string | boolean
}

type InternalTextAreaProps = Omit<TextAreaProps, 'variant'>

const InputLabelInside = forwardRef<HTMLTextAreaElement, InternalTextAreaProps>(
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
      placeholder,
      value,
      rows,
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
        <span className={labelClassNames}>{label}</span>
        <textarea
          rows={rows}
          id={id}
          disabled={disabled}
          className={inputClassNames}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onClick={onClick}
          placeholder={placeholder}
          value={value}
          ref={ref}
        />
      </label>
    )
  }
)

const InputLabelOutside = forwardRef<
  HTMLTextAreaElement,
  InternalTextAreaProps
>(
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
      placeholder,
      value,
      rows,
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
        <span className={labelClassNames}>{label}</span>
        <textarea
          id={id}
          disabled={disabled}
          className={inputClassNames}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onClick={onClick}
          placeholder={placeholder}
          value={value}
          ref={ref}
          rows={rows}
        />
      </label>
    )
  }
)

const InputDefault = forwardRef<HTMLTextAreaElement, InternalTextAreaProps>(
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
      placeholder,
      value,
      rows,
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
      [error, className, disabled]
    )
    return (
      <textarea
        aria-label={label}
        id={id}
        disabled={disabled}
        className={inputClassNames}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onClick={onClick}
        placeholder={placeholder}
        value={value}
        rows={rows}
        ref={ref}
      />
    )
  }
)

const variants: Record<TextAreaVariants, typeof InputDefault> = {
  inside: InputLabelInside,
  outside: InputLabelOutside,
  default: InputDefault,
}

const Input = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps & {
    variant?: TextAreaVariants
  }
>(
  ({ variant = 'default', ...props }, ref): JSX.Element =>
    React.createElement(variants[variant] ?? variants.default, {
      ...props,
      ref,
    })
)

Input.displayName = 'Input'
InputDefault.displayName = 'Input'
InputLabelInside.displayName = 'Input'
InputLabelOutside.displayName = 'Input'
export default Input
