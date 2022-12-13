import React from 'react'
import clsx from 'clsx'

const classes = {
  label: 'label cursor-pointer',
  text: 'label-text',
  input: 'checkbox checkbox-primary',
  inputError: 'checkbox checkbox-error',
  inputSizes: {
    xs: 'checkbox-xs',
    sm: 'checkbox-sm',
    md: 'chexbox-md',
    lg: 'checkbox-lg',
  },
} as const

export interface CheckboxProps {
  label?: string
  labelPosition?: 'left' | 'right'
  checked: boolean
  error?: boolean
  size?: keyof typeof classes['inputSizes']
  'aria-label'?: string
  'aria-labelledby'?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
  name?: string
  id?: string
  className?: string
}

const Checkbox = React.forwardRef(
  (
    {
      id,
      label,
      labelPosition = 'right',
      name,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      value,
      checked,
      onChange,
      disabled = false,
      error = false,
      className,
      size,
    }: CheckboxProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return !label ? (
      <input
        id={id}
        className={clsx(
          !error && classes.input,
          error && classes.inputError,
          size && classes.inputSizes[size],
          className
        )}
        ref={ref}
        type="checkbox"
        name={name}
        checked={checked}
        value={value}
        aria-label={ariaLabel ?? `${name}-checkbox`}
        onChange={onChange}
        disabled={disabled}
      />
    ) : (
      <div className={clsx('form-control', className)}>
        <label className={classes.label}>
          {labelPosition === 'left' ? (
            <span className={classes.text}>{label}</span>
          ) : null}
          <input
            disabled={disabled}
            id={id}
            className={clsx(
              !error && classes.input,
              error && classes.inputError,
              size && classes.inputSizes[size]
            )}
            ref={ref}
            type="checkbox"
            name={name}
            checked={checked}
            value={value}
            aria-labelledby={ariaLabelledBy}
            aria-label={ariaLabel}
            onChange={onChange}
          />
          {labelPosition === 'right' ? (
            <span className={classes.text}>{label}</span>
          ) : null}
        </label>
      </div>
    )
  }
)
Checkbox.displayName = 'Checkbox'

export default Checkbox
