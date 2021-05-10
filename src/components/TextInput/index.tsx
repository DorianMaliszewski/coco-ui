import React from 'react'

type TextInputType = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
export interface TextInputProps extends TextInputType {
  className?: string
  multiline?: boolean
  label?: string
  labelVariant?: 'inside' | 'outside'
  containerClassName?: string
}

const baseClassName = `border focus:border-primary-600 p-2 rounded outline-none focus:ring-2 ring-primary-200 text-black`
const withLabelClassName = `border focus:border-primary-600 p-2 pt-5 rounded outline-none focus:ring-2 ring-primary-200 text-black`

const TextInput = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextInputProps
>(
  (
    {
      className = '',
      containerClassName = '',
      multiline,
      placeholder = 'Type here...',
      label,
      labelVariant = 'outside',
      id,
      ...props
    }: TextInputProps,
    ref
  ) => {
    const InputComponent = multiline ? 'textarea' : 'input'

    const labelRender = {
      inside: (
        <div
          className={`relative text-gray-500 focus-within:text-primary-700 ${containerClassName}`}
        >
          <label className="absolute px-2 py-1 text-xs" htmlFor={id}>
            {label}
          </label>
          <InputComponent
            placeholder={placeholder}
            className={`${withLabelClassName} ${className}`}
            ref={ref as React.MutableRefObject<any>}
            {...props}
          />
        </div>
      ),
      outside: (
        <div
          className={`flex flex-col text-gray-500 focus-within:text-primary-700 ${containerClassName}`}
        >
          <label className="px-2 top-1 left-0 text-xs" htmlFor={id}>
            {label}
          </label>
          <InputComponent
            placeholder={placeholder}
            className={`${baseClassName} ${className}`}
            ref={ref as React.MutableRefObject<any>}
            {...props}
          />
        </div>
      ),
    }

    return label && labelRender[labelVariant] ? (
      labelRender[labelVariant]
    ) : (
      <InputComponent
        placeholder={placeholder}
        className={`${baseClassName} ${className}`}
        ref={ref as React.MutableRefObject<any>}
        {...props}
      />
    )
  }
)

TextInput.displayName = 'TextInput'
export default TextInput
