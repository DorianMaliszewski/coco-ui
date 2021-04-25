import React from 'react'

export interface TextInputProps extends React.InputHTMLAttributes<any> {
  className?: string
  multiline?: boolean
  parentRef?: any
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
      parentRef,
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
