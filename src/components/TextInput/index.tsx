import React from 'react'
import 'index.css'

type Variants = 'inside' | 'outside'

type TextInputType = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
export interface TextInputProps extends TextInputType {
  className?: string
  multiline?: boolean
  label?: string | React.ReactNode
  variant?: Variants
  containerClassName?: string
  autoResizeHeight?: boolean
  error?: string | boolean
}

const TextInput = React.forwardRef(
  (
    {
      autoResizeHeight,
      className = '',
      containerClassName = '',
      multiline,
      placeholder = 'Type here...',
      label,
      variant = 'outside',
      id,
      error,
      value,
      defaultValue,
      rows,
      disabled = false,
      onChange,
      ...props
    }: TextInputProps,
    ref
  ) => {
    const inputRef = React.useRef<any>(null)
    React.useImperativeHandle(ref, () => inputRef)

    const InputComponent = multiline ? 'textarea' : 'input'
    const rowsCount = multiline ? rows || 1 : undefined

    const onInputChange = (event: React.ChangeEvent<any>) => {
      if (multiline && autoResizeHeight && inputRef.current) {
        inputRef.current.style.height = `auto`
        inputRef.current.style.height = `${inputRef.current.scrollHeight + 5}px`
      }
      onChange?.(event)
    }

    React.useEffect(() => {
      let observer: ResizeObserver
      if (multiline && autoResizeHeight && inputRef.current) {
        const resizeTextArea = () => {
          inputRef.current.style.height = `auto`
          inputRef.current.style.height = `${
            inputRef.current.scrollHeight + 5
          }px`
        }
        observer = new ResizeObserver(resizeTextArea)
        observer.observe(inputRef.current)
        resizeTextArea()
      }

      return () => {
        if (observer) observer.disconnect()
      }
    }, [])

    const labelRender = {
      inside: (
        <div
          aria-disabled={disabled}
          aria-invalid={!!error}
          className={['text-input-container--inside', containerClassName].join(
            ' '
          )}
        >
          <label htmlFor={id}>{label}</label>
          <InputComponent
            id={id}
            placeholder={placeholder}
            className={[
              'text-input--labeled-inside',
              autoResizeHeight ? 'resize-x' : '',
              className,
            ].join(' ')}
            ref={inputRef}
            value={value}
            defaultValue={defaultValue}
            onChange={onInputChange}
            rows={rowsCount}
            {...props}
          />
        </div>
      ),
      outside: (
        <div
          aria-disabled={disabled}
          aria-invalid={!!error}
          className={['text-input-container--outside', containerClassName].join(
            ' '
          )}
        >
          <label htmlFor={id}>{label}</label>
          <InputComponent
            id={id}
            placeholder={placeholder}
            className={[
              'text-input--labeled-outside',
              autoResizeHeight ? 'resize-x' : '',
              className,
            ].join(' ')}
            ref={inputRef}
            value={value}
            defaultValue={defaultValue}
            onChange={onInputChange}
            rows={rowsCount}
            {...props}
          />
        </div>
      ),
    }

    return label && labelRender[variant] ? (
      labelRender[variant]
    ) : (
      <InputComponent
        disabled={disabled}
        aria-invalid={!!error}
        placeholder={placeholder}
        className={[
          'text-input--no-label',
          autoResizeHeight ? 'resize-x' : '',
          className,
        ].join(' ')}
        ref={inputRef}
        value={value}
        defaultValue={defaultValue}
        onChange={onInputChange}
        rows={rowsCount}
        {...props}
      />
    )
  }
)

TextInput.displayName = 'TextInput'
export default TextInput
