import React from 'react'
import { CheckIcon } from '@heroicons/react/solid'

const variants = {
  basic: {
    label: (checked: boolean) =>
      `flex items-center justify-center appearance-none w-4 h-4 rounded relative ${
        checked ? 'bg-primary-500' : 'border border-gray-300'
      }`,
    check: (checked: boolean) =>
      `${checked ? 'fill-current text-background' : 'hidden'}`,
  },
}

type Variant = keyof typeof variants
type LabelPosition = 'top' | 'right' | 'bottom' | 'left'
export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelPosition?: LabelPosition
  variant?: Variant
  checked: boolean
}

const Checkbox = React.forwardRef(
  (
    {
      id,
      label,
      labelPosition = 'right',
      name,
      'aria-checked': ariaChecked,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      value,
      checked,
      defaultChecked,
      onChange,
      variant = 'basic',
      disabled = false,
    }: CheckboxProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null)

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    return !label ? (
      <label
        aria-checked={ariaChecked || checked}
        className={`${variants[variant]?.label(!!checked)}`}
      >
        <CheckIcon className={variants[variant]?.check(!!checked)} />
        <input
          id={id}
          className={`appearance-none`}
          ref={inputRef}
          type="checkbox"
          name={name}
          checked={checked}
          defaultChecked={defaultChecked}
          value={value}
          aria-label={ariaLabel ?? `${name}-checkbox`}
          onChange={onChange}
          disabled={disabled}
        />
      </label>
    ) : (
      <label
        className="flex items-center"
        aria-checked={ariaChecked || checked}
      >
        {labelPosition === 'left' && <span className="mr-1">{label}</span>}
        <div className={variants[variant]?.label(!!checked)}>
          <CheckIcon className={variants[variant]?.check(!!checked)} />
          <input
            disabled={disabled}
            id={id}
            className={`appearance-none`}
            ref={inputRef}
            type="checkbox"
            name={name}
            checked={checked}
            defaultChecked={defaultChecked}
            value={value}
            aria-labelledby={ariaLabelledBy}
            aria-label={ariaLabel}
            onChange={onChange}
          />
        </div>
        {labelPosition === 'right' && <span className="ml-1">{label}</span>}
      </label>
    )
  }
)
Checkbox.displayName = 'Checkbox'

export default Checkbox
