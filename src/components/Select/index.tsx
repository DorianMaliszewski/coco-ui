import React, {
  ChangeEvent,
  KeyboardEvent,
  ForwardedRef,
  forwardRef,
  MouseEvent,
  useEffect,
  useMemo,
  useState,
  useRef,
  useCallback,
} from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import OptionList from './OptionList'
import Loader from 'components/Loader'
import useClickOutsideHandler from 'hooks/useClickOutsideHandler'
import { SelectVariant, SelectVariantClassNames } from './variant'
import classNames from 'classnames'

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
  variant?: SelectVariant
  onChange?: (result: ValueType) => unknown
  value: ValueType
  disabled?: boolean
  readOnly?: boolean
  tabIndex?: number
  isLoading?: boolean
  isSearchable?: boolean
  isMulti?: boolean
  error?: boolean | string
  required?: boolean
  'aria-label'?: string
}

const inputContainerClassNames = 'relative'

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

const Select = forwardRef(
  (
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
      variant = 'outside',
      tabIndex,
      isLoading,
      isSearchable,
      error,
      required,
    }: SelectProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isOpen, setOpen] = useState(false)
    const [search, setSearch] = useState<string>('')
    const [focused, setFocused] = useState<OptionValue>(options[0]?.value)

    const containerRef = useRef<HTMLLabelElement>(null)

    useClickOutsideHandler(containerRef, () => {
      setOpen(false)
      setSearch('')
    })

    const filteredOptions = useMemo(
      () =>
        search.length === 0 ? options : filterOptions({ options, search }),
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
      (event: ChangeEvent) => {
        setSearch((event.target as HTMLInputElement).value ?? '')
        handleOpen()
      },
      [handleOpen]
    )

    const handleInputKeyPress = useCallback((event: KeyboardEvent) => {
      if ([KEYS.Enter].includes(event.key)) {
        event.preventDefault()
      }
    }, [])

    const containerClassNames = useMemo(() => {
      const { container } =
        SelectVariantClassNames[variant] ?? SelectVariantClassNames.inside
      return classNames(container.base, {
        [container.error]: !!error && !disabled,
        [container.disabled]: disabled,
        [container.loading]: isLoading,
        [container.default]: !disabled && !error,
        [container.opened]: isOpen && !disabled && !error,
        [className ?? '']: true,
      })
    }, [disabled, error, variant, className, isLoading, isOpen])

    const inputClassNames = useMemo(() => {
      const { input: inputClasses } =
        SelectVariantClassNames[variant] ?? SelectVariantClassNames.inside
      return classNames(inputClasses.base, {
        [inputClasses.error]: !!error && !disabled,
        [inputClasses.disabled]: disabled,
        [inputClasses.open]: isOpen && variant === 'outside',
        [inputClasses.close]: !isOpen && variant === 'outside',
        [inputClasses.default]: !disabled && !error,
      })
    }, [disabled, error, label, variant, isOpen])

    const chevronClassNames = useMemo(
      () =>
        classNames(
          'fill-current absolute inset-y-0 right-0 w-4',
          variant === 'inside' ? 'top-1' : 'top-3 right-2',
          {
            'text-primary-600': isOpen && !error,
            'text-gray-300': !error && !isOpen,
            'text-error-600': error,
          }
        ),
      [error, isOpen, variant]
    )

    const labelClassNames = useMemo(() => {
      const { label: labelClasses } =
        SelectVariantClassNames[variant] ?? SelectVariantClassNames.inside
      return classNames('text-xs', {
        [labelClasses.error]: !!error && !disabled,
        [labelClasses.disabled]: disabled,
        [labelClasses.default]: !disabled && !error,
      })
    }, [disabled, error, variant])

    const searchClassNames = useMemo(() => {
      const { valueContainer } =
        SelectVariantClassNames[variant] ?? SelectVariantClassNames.inside
      return classNames(valueContainer.base, {
        [valueContainer.default]: !disabled && !error,
        [valueContainer.error]: !disabled && !!error,
        'bg-transparent': search.length === 0,
      })
    }, [variant, disabled, error, search])

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

    // When value change, change the focus
    useEffect(() => {
      setFocused((current) => {
        if (current) return current

        const selected = value
          ? options.find((option: SelectOptionType) => {
              if (Array.isArray(value)) {
                return option.value === value[value.length - 1]
              }

              return option.value === value
            })
          : options[0]

        return selected?.value ?? options[0]?.value
      })
    }, [value, options])

    // Set focus
    useEffect(() => {
      if (!focused && filteredOptions.length > 0)
        setFocused(filteredOptions[0].value)
      if (!filteredOptions.find((option) => option.value === focused)) {
        setFocused(filteredOptions[0]?.value)
      }
    }, [focused, filteredOptions])

    return (
      <label
        htmlFor={id}
        aria-disabled={disabled}
        className={containerClassNames}
        onKeyDown={handleKeyDown}
        onClick={handleOpen}
        aria-expanded={isOpen}
        aria-invalid={required && !value}
        ref={containerRef}
      >
        <span className={labelClassNames}>{label}</span>
        <div aria-expanded={isOpen} className={inputContainerClassNames}>
          <input
            name={name}
            role="combobox"
            className={inputClassNames}
            disabled={disabled}
            onKeyPress={handleInputKeyPress}
            aria-label={ariaLabel}
            placeholder={placeholder ?? 'Select...'}
            type="text"
            readOnly
            id={id}
            tabIndex={tabIndex}
            ref={ref}
            value={valueRender ?? ''}
            aria-haspopup="listbox"
          />
          {isSearchable && !disabled ? (
            <input
              autoComplete="off"
              type="text"
              onChange={handleInputChange}
              onKeyPress={handleInputKeyPress}
              value={search}
              className={searchClassNames}
            />
          ) : null}
          {isLoading || filteredOptions.length === 0 ? null : (
            <OptionList
              isMulti={isMulti}
              isOpen={isOpen}
              options={filteredOptions}
              value={value}
              focused={focused}
              onOptionClick={(option: SelectOptionType, event: MouseEvent) => {
                event.preventDefault()
                event.stopPropagation()
                isMulti
                  ? handleClickForMulti(option)
                  : handleClickForSingle(option)
              }}
            />
          )}
          {isLoading ? (
            <Loader className="mx-1" size="sm" color="primary-800" />
          ) : (
            <ChevronDownIcon className={chevronClassNames} />
          )}
        </div>
      </label>
    )

    /* <label
        className={containerClassNames}
        htmlFor={id}
        aria-disabled={disabled}
        onKeyDown={handleKeyDown}
        onClick={handleOpen}
        aria-expanded={isOpen}
        aria-invalid={required && !value}
        ref={containerRef}
        tabIndex={variant !== 'outside' ? -1 : undefined}
      >
        {label && variant !== 'default' ? (
          <span className={labelClassNames}>
            {label}
            {required ? <>&nbsp;*</> : null}
          </span>
        ) : null}
        <div
          tabIndex={variant === 'outside' ? -1 : undefined}
          className={valueContainerClassNames}
        >
          {!search ? (
            <div className="truncate flex outline-none mr-1 flex-grow">
              {valueRender}
            </div>
          ) : null}
          <input
            autoComplete="off"
            name={name}
            className={!isSearchable ? 'w-0' : inputClassNames}
            role="combobox"
            aria-haspopup="listbox"
            type="text"
            id={id}
            tabIndex={tabIndex}
            ref={ref}
            disabled={disabled || !isSearchable}
            placeholder={!value ? placeholder ?? 'Select...' : undefined}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
            value={search}
          />
        </div>

      </label> */
  }
)

Select.displayName = 'Select'
export default Select
