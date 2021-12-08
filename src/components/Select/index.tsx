import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import OptionList from './OptionList'
import Loader from 'components/Loader'
import useClickOutsideHandler from 'hooks/useClickOutsideHandler'
import Label from './Label'

const defaultFilterOptions = ({
  options,
  search,
}: {
  options: SelectOptionType[]
  search: string
}) =>
  options.filter((option) =>
    typeof option.label === 'string'
      ? option.label
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(search.toLowerCase().replace(/\s+/g, ''))
      : true
  )

const getContainerClassName = ({
  disabled,
  readOnly,
  isLoading,
  label,
  labelVariant,
  className,
}: any) =>
  `relative border ${
    !disabled && !readOnly && !isLoading
      ? 'focus-within:border-primary-600'
      : ''
  } bg-background border-gray-300 rounded p-2 ${
    label && labelVariant === 'inside' ? 'pt-4' : ''
  } flex items-center ${
    disabled ? 'bg-gray-50 cursor-not-allowed pointer-events-none' : ''
  } ${className ?? ''}`.replace(/ +(?= )/g, ' ')

export type SelectOptionType = {
  value: string | number
  label: string
}

export type ValueType = string | number | Array<string | number> | undefined
export interface SelectProps {
  className?: string
  containerClassName?: string
  filterOptions?: (args: {
    options: SelectOptionType[]
    search: string
  }) => SelectOptionType[]
  id?: string
  name?: string
  options: SelectOptionType[]
  placeholder?: string
  label?: string
  labelVariant?: 'outside' | 'inside'
  onChange?: (result: ValueType) => unknown
  onSearchChange?: (string: string) => any
  value: ValueType
  parentRef?: React.RefObject<HTMLDivElement>
  disabled?: boolean
  readOnly?: boolean
  tabIndex?: number
  isLoading?: boolean
  isSearchable?: boolean
  isMulti?: boolean
  inputProps?: any
  searchValue?: string
  error?: boolean | string
}

const Select = React.forwardRef(
  (
    {
      className,
      containerClassName: containerClassNameProp,
      id,
      name = '',
      options = [],
      placeholder,
      onChange,
      onSearchChange,
      isMulti,
      value = isMulti ? [] : undefined,
      parentRef,
      disabled,
      label,
      labelVariant = 'outside',
      readOnly,
      tabIndex,
      isLoading,
      isSearchable,
      inputProps: additionalInputProps,
      searchValue,
      error,
      filterOptions = defaultFilterOptions,
    }: SelectProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [isOpen, setOpen] = React.useState(false)
    const [search, setSearch] = React.useState<string | undefined>(searchValue)
    const [focused, setFocused] = React.useState<string | number>(
      isMulti || !value || Array.isArray(value) ? options[0]?.value : value
    )

    const inputRef = React.useRef<any>(null)
    const containerRef = React.useRef<HTMLDivElement>(null)
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)
    React.useImperativeHandle(parentRef, () => containerRef.current as any)

    useClickOutsideHandler(containerRef, () => {
      setOpen(false)
      setSearch(undefined)
    })

    const inputProps = React.useMemo(
      () => ({
        tabIndex: tabIndex ?? -1,
        ...additionalInputProps,
      }),
      [tabIndex, additionalInputProps]
    )

    const finalOptions = React.useMemo(
      () =>
        !isSearchable || !search ? options : filterOptions({ options, search }),
      [isSearchable, options, search, filterOptions]
    )

    const handleOpen = React.useCallback(
      (event?: React.MouseEvent<any>) => {
        if (event) {
          event.preventDefault()
          event.stopPropagation()
        }
        if (!disabled && !readOnly) {
          setOpen(true)
        }
      },
      [disabled, readOnly]
    )

    // Click an option change the value only
    const handleClickForMulti = React.useCallback(
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
      },
      [onChange, value]
    )

    // Click an option change search and value then close the options
    const handleClickForSingle = React.useCallback(
      (option: SelectOptionType) => {
        onChange?.(option.value)
        setSearch(undefined)
        inputRef.current.focus()
        setOpen(false)
      },
      [inputRef, onChange]
    )

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent) => {
        if (!isOpen && event.key !== 'ArrowDown') {
          return
        }

        if (event.key.includes('Arrow') || event.key === 'Enter')
          event.preventDefault()
        switch (event.key) {
          case 'Tab':
          case 'Escape':
            setOpen(false)
            break
          case 'ArrowUp':
            {
              const index = finalOptions.findIndex(
                (option) => option.value === focused
              )
              setFocused(
                (current: string | number) =>
                  finalOptions[index - 1]?.value || current
              )
            }
            break
          case 'ArrowDown':
            if (!isOpen) {
              handleOpen()
            } else {
              const index = finalOptions.findIndex(
                (option) => option.value === focused
              )
              setFocused(
                (current: string | number) =>
                  finalOptions[index + 1]?.value || current
              )
            }
            break
          case 'Enter': {
            const optionSelected = options.find(
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
      },
      [
        handleClickForMulti,
        handleClickForSingle,
        options,
        finalOptions,
        isMulti,
        isOpen,
        focused,
      ]
    )

    const handleInputChange = React.useCallback(
      (event: React.ChangeEvent) => {
        if (isSearchable) {
          onSearchChange?.((event.target as any).value)
          setSearch((event.target as any).value)
        }
      },
      [isSearchable, onSearchChange]
    )

    const containerClassName = React.useMemo(
      () =>
        getContainerClassName({
          disabled,
          readOnly,
          isLoading,
          label,
          labelVariant,
          className,
        }),
      [disabled, readOnly, isLoading, label, labelVariant, className]
    )

    const valueRender = React.useMemo(
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
    React.useEffect(() => {
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

    React.useEffect(() => {
      setSearch(searchValue)
    }, [searchValue])

    // Set focus
    React.useEffect(() => {
      if (!focused && finalOptions.length > 0) setFocused(finalOptions[0].value)
      if (finalOptions?.findIndex((option) => option.value === focused) < 0) {
        setFocused(finalOptions[0]?.value)
      }
    }, [focused, finalOptions])

    const selectRender = (
      <div
        onClick={handleOpen}
        ref={containerRef}
        className={[containerClassName, error ? 'text-error-500' : ''].join(
          ' '
        )}
        aria-disabled={disabled}
        onKeyDown={handleKeyDown}
      >
        {label && labelVariant === 'inside' ? (
          <Label variant="inside" id={id}>
            {label}
          </Label>
        ) : null}
        <div
          className={`w-full flex items-center flex-grow`}
          aria-readonly={readOnly}
        >
          {isMulti ? (
            <>
              {value && (
                <div className="flex outline-none mr-1">{valueRender}</div>
              )}
              <input
                className={`flex-grow outline-none ${
                  isLoading
                    ? 'bg-transparent pointer-events-none cursor-not-allowed'
                    : ''
                } ${disabled ? 'opacity-50' : ''}`.replace(/ +(?= )/g, ' ')}
                aria-expanded={isOpen}
                aria-controls={name + '-list'}
                aria-owns={name + '-list'}
                role="combobox"
                aria-haspopup="listbox"
                id={id}
                placeholder={placeholder || 'Select...'}
                error={error}
                {...inputProps}
                ref={inputRef}
                disabled={disabled}
                readOnly={readOnly || !isSearchable}
                onKeyDown={handleKeyDown}
                value={search}
                onChange={handleInputChange}
              />
            </>
          ) : (
            <input
              className={`bg-transparent w-full outline-none ${
                isLoading ? 'pointer-events-none cursor-not-allowed' : ''
              } ${disabled ? 'opacity-50' : ''}`.replace(/ +(?= )/g, ' ')}
              aria-expanded={isOpen}
              aria-controls={name + '-list'}
              aria-autocomplete={name + '-list'}
              aria-activedescendant={value}
              role="combobox"
              aria-haspopup="listbox"
              type="text"
              id={id}
              {...inputProps}
              ref={inputRef}
              disabled={disabled}
              readOnly={readOnly || isLoading || !isSearchable}
              placeholder={placeholder || 'Select...'}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              value={
                search ??
                (options.find((option) => option.value === value)?.label || '')
              }
            />
          )}
          {isLoading || readOnly ? null : (
            <ChevronDownIcon
              width={12}
              height={12}
              className={`fill-current ${
                isOpen ? 'text-primary-600' : 'text-gray-400'
              }`}
            />
          )}
          {isLoading && (
            <Loader className="mx-1" size="sm" color="primary-800" />
          )}
        </div>
        {isLoading ? null : (
          <OptionList
            isMulti={isMulti}
            name={name}
            isOpen={isOpen}
            options={finalOptions}
            value={value}
            focused={focused}
            onOptionClick={(
              option: SelectOptionType,
              event: React.MouseEvent
            ) => {
              event.preventDefault()
              event.stopPropagation()
              isMulti
                ? handleClickForMulti(option)
                : handleClickForSingle(option)
            }}
          />
        )}
      </div>
    )

    return label && labelVariant === 'outside' ? (
      <div className={`flex flex-col ${containerClassNameProp ?? ''}`}>
        <Label variant="outside" id={id}>
          {label}
        </Label>
        {selectRender}
      </div>
    ) : (
      selectRender
    )
  }
)

Select.displayName = 'Select'
export default Select
