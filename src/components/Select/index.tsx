import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { RenderSelectOptionProps } from './Option'
import OptionList from './OptionList'
import Loader from 'components/Loader'
import useClickOutsideHandler from 'hooks/useClickOutsideHandler'
import Label from './Label'

const defaultFilterOptions = ({
  options,
  textKey,
  search,
}: {
  options: SelectOptionType[]
  textKey: string
  search: string
}) =>
  options.filter((option) =>
    (option[textKey] as string)
      ?.toLowerCase()
      .replace(/\s+/g, '')
      .includes(search.toLowerCase().replace(/\s+/g, ''))
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

export type SelectOptionType = any
export interface SelectProps {
  className?: string
  containerClassName?: string
  filterOptions?: (args: {
    options: SelectOptionType[]
    textKey: string
    search: string
  }) => SelectOptionType[]
  id?: string
  name?: string
  options: SelectOptionType[]
  placeholder?: string
  label?: string
  labelVariant?: 'outside' | 'inside'
  onChange?: (result: SelectOptionType | SelectOptionType[]) => unknown
  onSearchChange?: (string: string) => any
  value?: SelectOptionType | SelectOptionType[]
  parentRef?: React.RefObject<HTMLDivElement>
  disabled?: boolean
  readOnly?: boolean
  tabIndex?: number
  isLoading?: boolean
  isSearchable?: boolean
  isMulti?: boolean
  isMultiLine?: boolean
  textKey?: string
  valueKey?: string
  inputProps?: any
  renderSelected?: (
    values: SelectOptionType[] | SelectOptionType
  ) => React.ReactNode
  renderOption?: (option: RenderSelectOptionProps) => React.ReactNode
  searchValue?: string
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
      value,
      parentRef,
      disabled,
      label,
      labelVariant = 'outside',
      readOnly,
      tabIndex,
      isLoading,
      isSearchable,
      isMulti,
      isMultiLine,
      inputProps: additionalInputProps,
      searchValue,
      textKey = 'label',
      filterOptions = defaultFilterOptions,
      valueKey = 'value',
      renderSelected = (value) =>
        isMulti
          ? (value as SelectOptionType[])
              .map((value: SelectOptionType) => value[textKey])
              .join(', ')
          : ((value as SelectOptionType)[textKey] as string),
      renderOption,
    }: SelectProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const InputComponent = isMultiLine ? 'textarea' : 'input'
    const [isOpen, setOpen] = React.useState(false)
    const [search, setSearch] = React.useState<string | undefined>(searchValue)
    const [focused, setFocused] = React.useState<SelectOptionType | undefined>(
      value || undefined
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
        !isSearchable || !search
          ? options
          : filterOptions({ options, textKey, search }),
      [isSearchable, options, textKey, search, filterOptions]
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
        if (!value) {
          onChange?.([option])
          return
        }
        const typedValue = value as SelectOptionType[]
        const index = typedValue?.findIndex(
          (v: SelectOptionType) => v[valueKey] === option[valueKey]
        )

        // Handle if we click on an option which is already in value
        if (index > -1) {
          const tmp = [...typedValue]
          tmp.splice(index, 1)
          onChange?.([...tmp])
        } else {
          onChange?.([...typedValue, option])
        }
      },
      [onChange, value]
    )

    // Click an option change search and value then close the options
    const handleClickForSingle = React.useCallback(
      (option: SelectOptionType) => {
        onChange?.(option)
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
                (option) => option === focused
              )
              setFocused(
                (current: SelectOptionType) =>
                  finalOptions[index - 1] || current
              )
            }
            break
          case 'ArrowDown':
            if (!isOpen) {
              handleOpen()
            } else {
              const index = finalOptions.findIndex(
                (option) => option === focused
              )
              console.log('New index', index, finalOptions)
              setFocused(
                (current: SelectOptionType) =>
                  finalOptions[index + 1] || current
              )
            }
            break
          case 'Enter':
            isMulti
              ? handleClickForMulti(focused)
              : handleClickForSingle(focused)
            break
          default:
            break
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

    // When value change, change the focus
    React.useEffect(() => {
      const selected = value
        ? options.findIndex(
            (option: SelectOptionType) => option[valueKey] === value[valueKey]
          )
        : 0
      setFocused(selected > -1 ? selected : 0)
    }, [value, options, valueKey])

    React.useEffect(() => {
      setSearch(searchValue)
    }, [searchValue])

    // Set focus
    React.useEffect(() => {
      console.log('Focused', focused)
      if (!focused && finalOptions.length) setFocused(finalOptions[0])
      if (finalOptions?.findIndex((option) => option === focused) < 0) {
        setFocused(finalOptions[0])
      }
    }, [focused, finalOptions])

    const selectRender = (
      <div
        onClick={handleOpen}
        ref={containerRef}
        className={containerClassName}
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
                <div className="flex outline-none mr-1">
                  {renderSelected((value as SelectOptionType[]) || [])}
                </div>
              )}
              <InputComponent
                className={`flex-grow outline-none ${
                  isLoading
                    ? 'bg-transparent pointer-events-none cursor-not-allowed'
                    : ''
                } ${disabled ? 'opacity-50' : ''}`.replace(/ +(?= )/g, ' ')}
                aria-expanded={isOpen}
                aria-controls={name + '-list'}
                aria-owns={name + '-list'}
                aria-activedescendant={
                  options.find(
                    (option: SelectOptionType) => option[valueKey] === value
                  )?.[valueKey] as string
                }
                role="combobox"
                aria-haspopup="listbox"
                id={id}
                placeholder={placeholder || 'Select...'}
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
            <InputComponent
              className={`bg-transparent w-full outline-none ${
                isLoading ? 'pointer-events-none cursor-not-allowed' : ''
              } ${disabled ? 'opacity-50' : ''}`.replace(/ +(?= )/g, ' ')}
              aria-expanded={isOpen}
              aria-controls={name + '-list'}
              aria-autocomplete={name + '-list'}
              aria-activedescendant={
                options.find(
                  (option: SelectOptionType) => option[valueKey] === value
                )?.[valueKey] as string
              }
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
              value={search ?? (value?.[textKey] || '')}
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
            valueKey={valueKey}
            textKey={textKey}
            focused={focused}
            renderOption={renderOption}
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
