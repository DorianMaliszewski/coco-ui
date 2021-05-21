import React from 'react'

type TextInputType = React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
export interface TextInputProps extends TextInputType {
  className?: string
  multiline?: boolean
  label?: string | React.ReactNode
  labelVariant?: 'inside' | 'outside'
  containerClassName?: string
  autoResizeHeight?: boolean
}

const baseClassName = `border focus:border-primary-600 p-2 rounded outline-none focus:ring-2 ring-primary-200 text-black`
const withLabelClassName = `border focus:border-primary-600 p-2 pt-5 rounded outline-none focus:ring-2 ring-primary-200 text-black`

const TextInput = React.forwardRef(
  (
    {
      autoResizeHeight,
      className = '',
      containerClassName = '',
      multiline,
      placeholder = 'Type here...',
      label,
      labelVariant = 'outside',
      id,
      value,
      defaultValue,
      rows,
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
          className={`relative text-gray-500 focus-within:text-primary-700 ${containerClassName}`}
        >
          <label className="absolute px-2 py-1 text-xs" htmlFor={id}>
            {label}
          </label>
          <InputComponent
            id={id}
            placeholder={placeholder}
            className={`${withLabelClassName} ${
              autoResizeHeight ? 'resize-x' : ''
            } ${className}`}
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
          className={`flex flex-col text-gray-500 focus-within:text-primary-700 ${containerClassName}`}
        >
          <label className="px-2 top-1 left-0 text-xs" htmlFor={id}>
            {label}
          </label>
          <InputComponent
            id={id}
            placeholder={placeholder}
            className={`${baseClassName} ${
              autoResizeHeight ? 'resize-x' : ''
            } ${className}`}
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

    return label && labelRender[labelVariant] ? (
      labelRender[labelVariant]
    ) : (
      <InputComponent
        placeholder={placeholder}
        className={`${baseClassName} ${
          autoResizeHeight ? 'resize-x' : ''
        } ${className}`}
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
