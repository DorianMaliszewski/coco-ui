import React, {
  ChangeEvent,
  KeyboardEvent,
  ForwardedRef,
  forwardRef,
  MouseEvent,
  useMemo,
  useState,
  useRef,
  useCallback,
} from 'react'
import OptionList from './OptionList'
import useClickOutsideHandler from 'hooks/useClickOutsideHandler'
import clsx from 'clsx'

const errorClasses = 'select-error'
const disabledClasses = 'select-disabled'
const inputClasses = 'select select-bordered'

export type OptionValue = string | number
export type SelectOptionType = {
  value: OptionValue
  label: string
}

export type ValueType = OptionValue | Array<OptionValue> | undefined
export type SelectProps = {
  className?: string
  id?: string
  name?: string
  options: SelectOptionType[]
  placeholder?: string
  label?: string
  onChange?: (result: ValueType) => unknown
  value: ValueType
  disabled?: boolean
  readOnly?: boolean
  tabIndex?: number
  isSearchable?: boolean
  isMulti?: boolean
  error?: boolean | string
  required?: boolean
  'aria-label'?: string
}

const KEYS = {
  ArrowDown: 'ArrowDown',
  ArrowUp: 'ArrowUp',
  Tab: 'Tab',
  Escape: 'Escape',
  Enter: 'Enter',
}

const filterOptions = ({
  options,
  search,
}: {
  options: SelectOptionType[]
  search: string
}) =>
  options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  )

function Select(
  {
    'aria-label': ariaLabel,
    className,
    id,
    name,
    options = [],
    placeholder,
    onChange,
    isMulti,
    value = isMulti ? [] : undefined,
    disabled,
    label,
    tabIndex,
    isSearchable,
    error,
    required,
  }: SelectProps,
  ref: ForwardedRef<HTMLInputElement>
): JSX.Element {
  const [isOpen, setOpen] = useState(false)
  const [search, setSearch] = useState<string>('')
  const [focused, setFocused] = useState<OptionValue>(options[0]?.value)

  const containerRef = useRef<HTMLLabelElement>(null)

  useClickOutsideHandler(containerRef, () => {
    setOpen(false)
    setSearch('')
  })

  const filteredOptions = useMemo(
    () => (search.length === 0 ? options : filterOptions({ options, search })),
    [isSearchable, options, search, filterOptions]
  )

  const handleOpen = useCallback(() => {
    if (!disabled) {
      setOpen(true)
    }
  }, [disabled])

  // Click an option change the value only
  const handleClickForMulti = useCallback(
    (option: SelectOptionType) => {
      if (!value || !Array.isArray(value)) {
        onChange?.([option.value])
        return
      }
      const index = value.findIndex((v) => v === option.value)

      // Handle if we click on an option which is already in value
      if (index > -1) {
        const tmp = [...value]
        tmp.splice(index, 1)
        onChange?.([...tmp])
      } else {
        onChange?.([...value, option.value])
      }
      setSearch('')
    },
    [onChange, value]
  )

  // Click an option change search and value then close the options
  const handleClickForSingle = useCallback(
    (option: SelectOptionType) => {
      onChange?.(option.value)
      setSearch('')
      setOpen(false)
    },
    [onChange]
  )

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpen) {
        if (event.key === KEYS.ArrowDown) handleOpen()
      } else if (
        [
          KEYS.ArrowDown,
          KEYS.ArrowUp,
          KEYS.Enter,
          KEYS.Tab,
          KEYS.Escape,
        ].includes(event.key)
      ) {
        event.stopPropagation()
        switch (event.key) {
          case KEYS.Tab:
          case KEYS.Escape:
            setOpen(false)
            break
          case KEYS.ArrowUp:
            {
              const index = filteredOptions.findIndex(
                (option) => option.value === focused
              )
              setFocused(
                (current) => filteredOptions[index - 1]?.value ?? current
              )
            }
            break
          case KEYS.ArrowDown:
            if (!isOpen) {
              handleOpen()
              setFocused(filteredOptions[0].value)
            } else {
              const index = filteredOptions.findIndex(
                (option) => option.value === focused
              )
              setFocused(
                (current: string | number) =>
                  filteredOptions[index + 1]?.value ?? current
              )
            }
            break
          case KEYS.Enter: {
            const optionSelected = filteredOptions.find(
              (option) => option.value === focused
            )
            if (optionSelected) {
              isMulti
                ? handleClickForMulti(optionSelected)
                : handleClickForSingle(optionSelected)
            }
            break
          }
        }
      }
    },
    [
      isOpen,
      filteredOptions,
      handleClickForMulti,
      handleClickForMulti,
      focused,
      handleOpen,
    ]
  )

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.currentTarget.value ?? '')
      handleOpen()
    },
    [handleOpen]
  )

  const handleInputKeyPress = useCallback((event: KeyboardEvent) => {
    if ([KEYS.Enter].includes(event.key)) {
      event.preventDefault()
    }
  }, [])

  const inputClassName = clsx(inputClasses, {
    [errorClasses]: error,
    [disabledClasses]: disabled,
  })

  const valueRender = useMemo(
    () =>
      Array.isArray(value)
        ? options
            .filter((option) => value.includes(option.value))
            .map((option) => option.label)
            .join(', ')
        : options.find((option) => value === option.value)?.label,
    [options, value]
  )

  return (
    <div
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      className={clsx('dropdown', className)}
      aria-expanded={isOpen}
      aria-disabled={disabled}
    >
      <div
        className="form-control"
        aria-invalid={required && !value}
        onKeyDown={handleKeyDown}
        onClick={handleOpen}
      >
        {label ? (
          <label htmlFor={id} className="label">
            <span className="label-text">{label}</span>
          </label>
        ) : null}
        <input
          name={name}
          role="combobox"
          className={inputClassName}
          disabled={disabled}
          onKeyPress={handleInputKeyPress}
          onChange={handleInputChange}
          readOnly={!isSearchable}
          aria-label={ariaLabel}
          placeholder={placeholder ?? 'Select...'}
          type="text"
          id={id}
          tabIndex={tabIndex}
          ref={ref}
          value={isOpen && search.length > 0 ? search : valueRender ?? ''}
          aria-haspopup="listbox"
        />
      </div>
      <OptionList
        isMulti={isMulti}
        isOpen={isOpen}
        options={filteredOptions}
        value={value}
        focused={focused}
        onOptionClick={(option: SelectOptionType, event: MouseEvent) => {
          event.preventDefault()
          event.stopPropagation()
          isMulti ? handleClickForMulti(option) : handleClickForSingle(option)
        }}
      />
    </div>
  )
}

export default forwardRef(Select)
