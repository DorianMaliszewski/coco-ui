import React from 'react'

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelPosition?: 'left' | 'right'
  className?: string
}
const Radio = ({
  name,
  id,
  'aria-labelledby': ariaLabelledBy,
  'aria-label': ariaLabel,
  value,
  onChange,
  checked,
  defaultChecked,
  label,
  labelPosition = 'left',
  className = '',
}: RadioProps): JSX.Element => {
  return !label ? (
    <div className="cursor-pointer flex items-center m-1">
      <div
        className={`h-2 w-2 m-1 rounded-full ${
          checked
            ? 'bg-primary-500 ring ring-primary-500 ring-offset-2'
            : 'bg-gray-200 ring ring-gray-200 ring-offset-2'
        }`}
      />
      <input
        className="appearance-none"
        name={name}
        id={id}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        value={value}
        type="radio"
        onChange={onChange}
        checked={checked}
        defaultChecked={defaultChecked}
      />
    </div>
  ) : (
    <label className={`cursor-pointer flex items-center ${className}`}>
      {labelPosition === 'left' && <span className="mr-1">{label}</span>}
      <div
        className={`h-2 w-2 m-1 rounded-full ${
          checked
            ? 'bg-primary-500 ring ring-primary-500 ring-offset-2'
            : 'bg-gray-200 ring ring-gray-200 ring-offset-2'
        }`}
      />
      <input
        className="appearance-none"
        name={name}
        id={id}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        value={value}
        type="radio"
        onChange={onChange}
        checked={checked}
        defaultChecked={defaultChecked}
      />
      {labelPosition === 'right' && <span className="ml-1">{label}</span>}
    </label>
  )
}

export default Radio
