import React from 'react'

type TextInputType = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
export interface TextInputProps extends TextInputType {
  className?: string
  multiline?: boolean
}

const baseClassName = `border focus:border-primary-600 p-2 rounded outline-none focus:ring-2 ring-primary-200`

const TextInput = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextInputProps
>(
  (
    {
      className = '',
      multiline,
      placeholder = 'Type here...',
      ...props
    }: TextInputProps,
    ref
  ) => {
    return multiline ? (
      <textarea
        placeholder={placeholder}
        className={`${baseClassName} ${className}`}
        ref={ref as React.MutableRefObject<HTMLTextAreaElement>}
        {...props}
      />
    ) : (
      <input
        placeholder={placeholder}
        className={`${baseClassName} ${className}`}
        ref={ref as React.MutableRefObject<HTMLInputElement>}
        {...props}
      />
    )
  }
)

TextInput.displayName = 'TextInput'
export default TextInput
