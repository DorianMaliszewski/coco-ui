import { XIcon } from '@heroicons/react/solid'
import Badge from '../Badge'
import React, { AriaAttributes } from 'react'

type RenderSelectedProps = { array: string[]; onDelete: (index: number) => any }
export type TextArrayInputProps = AriaAttributes & {
  onInputChange?: (event: React.ChangeEvent<any>) => any
  onChange?: (strings: string[]) => any
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
  onKeyDown?: React.KeyboardEventHandler
  onKeyPress?: React.KeyboardEventHandler
  onKeyUp?: React.KeyboardEventHandler
  value?: string[]
  className?: string
  placeholder?: string
  ref?: React.Ref<HTMLInputElement>
  renderSelected?: (props: RenderSelectedProps) => React.ReactNode
  disabled?: boolean
}

const defaultRender = ({ array, onDelete }: RenderSelectedProps) =>
  array?.map((string, index) => (
    <Badge key={index} variant="outline" className="mr-1 px-1">
      <span>{string}</span>
      <XIcon onClick={onDelete(index)} className="w-4 cursor-pointer" />
    </Badge>
  ))

const TextArrayInput = ({
  disabled,
  onInputChange,
  onKeyDown,
  onChange,
  value,
  placeholder,
  ref,
  renderSelected = defaultRender,
  ...props
}: TextArrayInputProps): JSX.Element => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)
  const [inputValue, setInputValue] = React.useState('')
  const [array, setArray] = React.useState(value ?? [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange?.(event)
    if (!event.defaultPrevented) setInputValue(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event)
    if (event.key === 'Enter' && !event.defaultPrevented && inputValue.length) {
      const tmp = [...array]
      tmp.push(inputValue)
      onChange?.(tmp)
      setArray(tmp)
      setInputValue('')
    }
    if (
      event.key === 'Backspace' &&
      !event.defaultPrevented &&
      inputValue.length === 0
    ) {
      const tmp = [...array]
      tmp.pop()
      onChange?.(tmp)
      setArray(tmp)
    }
  }

  const handleDelete = (index: number) => () => {
    const tmp = [...array]
    tmp.splice(index, 1)
    onChange?.(tmp)
    setArray(tmp)
  }

  React.useEffect(() => {
    value && setArray(value)
  }, [value])
  return (
    <div
      className={`flex w-full border focus-within:border-primary-600 p-2 rounded outline-none focus-within:ring-2 ring-primary-200 text-black ${
        disabled ? 'opacity-50 pointer-event-none' : ''
      }`}
    >
      <div className="flex">
        {renderSelected({ array, onDelete: handleDelete })}
      </div>
      <input
        {...props}
        type="text"
        className="flex-grow focus:outline-none"
        placeholder={placeholder ?? 'Type some Text...'}
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default TextArrayInput
