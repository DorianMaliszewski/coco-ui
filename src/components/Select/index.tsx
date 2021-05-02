import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { RenderSelectOptionProps } from './Option'
import OptionList from './OptionList'
import Loader from 'components/Loader'

export type SelectOptionType = any
export interface SelectProps {
  className?: string
  id?: string
  name?: string
  options: SelectOptionType[]
  placeholder?: string
  onChange: (result: SelectOptionType | SelectOptionType[]) => unknown
  value?: SelectOptionType | SelectOptionType[]
  parentRef?: React.RefObject<HTMLDivElement>
  disabled?: boolean
  readOnly?: boolean
  tabIndex?: number
  isLoading?: boolean
  isSearchable?: boolean
  isMulti?: boolean
  textKey?: string
  valueKey?: string
  renderSelected?: (
    values: SelectOptionType[] | SelectOptionType
  ) => React.ReactNode
  renderOption?: (option: RenderSelectOptionProps) => React.ReactNode
}

const Select = React.forwardRef(
  (
    {
      className,
      id,
      name = '',
      options = [],
      placeholder,
      onChange,
      value,
      parentRef,
      disabled,
      readOnly,
      tabIndex,
      isLoading,
      isSearchable,
      isMulti,
      textKey = 'label',
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
    const [isOpen, setOpen] = React.useState(false)
    const [search, setSearch] = React.useState('')
    const inputRef = React.useRef<HTMLInputElement>(null)
    const listRef = React.useRef<HTMLDivElement>(null)
    const containerRef = React.useRef<HTMLDivElement>(
      parentRef?.current ?? null
    )
    const [focused, setFocused] = React.useState(0)
    const inputProps = {
      tabIndex: tabIndex ?? -1,
    }

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (!isOpen) {
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
          setFocused(focused === 0 ? focused : focused - 1)
          break
        case 'ArrowDown':
          setFocused(options.length <= focused + 1 ? focused : focused + 1)
          break
        case 'Enter':
          isMulti
            ? handleClickForMulti(options[focused])
            : handleClickForSingle(options[focused])
          break
        default:
          break
      }
    }

    const handleClickForMulti = (option: SelectOptionType) => {
      if (!value) {
        onChange([option])
        return
      }
      const typedValue = value as SelectOptionType[]
      const index = typedValue?.findIndex(
        (v: SelectOptionType) => v[valueKey] === option[valueKey]
      )
      if (index > -1) {
        const tmp = [...typedValue]
        tmp.splice(index, 1)
        onChange([...tmp])
      } else {
        onChange([...typedValue, option])
      }

      inputRef.current?.focus()
    }

    const handleClickForSingle = (option: SelectOptionType) => {
      onChange(option)
      setSearch(option[textKey] as string)
      setOpen(false)
    }

    React.useEffect(() => {
      const selectElement = containerRef?.current
      const handleSelectClick = (event: MouseEvent | TouchEvent) => {
        if (disabled || readOnly) {
          return
        }
        if (
          selectElement?.contains(event.target as Node) ||
          selectElement === event.target
        ) {
          setOpen(true)
          inputRef.current?.focus()
        } else {
          setOpen(false)
        }
      }
      window.addEventListener('click', handleSelectClick)
      window.addEventListener('touchstart', handleSelectClick)
      return () => {
        window.removeEventListener('click', handleSelectClick)
        window.removeEventListener('touchstart', handleSelectClick)
      }
    }, [containerRef, disabled, readOnly, isOpen, ref])

    React.useEffect(() => {
      if (isOpen) {
        const selected = options.findIndex(
          (option: SelectOptionType) => option[valueKey] === value
        )
        if (selected > -1) {
          setFocused(selected)
        } else {
          setFocused(0)
        }
      }
    }, [isOpen, value, options, valueKey])

    React.useEffect(() => {
      if (!isMulti) {
        setSearch((currentSearch) => {
          if (!currentSearch) {
            return value
              ? (options.find(
                  (option: SelectOptionType) =>
                    option[valueKey] === value ||
                    option[valueKey] === (value as SelectOptionType)[valueKey]
                )?.[textKey] as string)
              : ''
          }
          return currentSearch
        })
      }
    }, [isMulti, value, options, valueKey, textKey])

    return (
      <div
        ref={containerRef}
        className={`relative border ${
          !disabled && !readOnly && !isLoading
            ? 'focus-within:border-primary-600'
            : ''
        } bg-background border-gray-300 rounded p-2 flex items-center ${
          disabled ? 'bg-gray-50 cursor-not-allowed pointer-events-none' : ''
        } ${className ?? ''}`}
        aria-disabled={disabled}
        onKeyDown={handleKeyDown}
      >
        <div className="w-full flex items-center" aria-readonly={readOnly}>
          {isMulti ? (
            <>
              {value && (
                <div className="flex outline-none mr-1">
                  {renderSelected((value as SelectOptionType[]) || [])}
                </div>
              )}
              <input
                className={`flex-grow outline-none ${
                  isLoading &&
                  'bg-transparent pointer-events-none cursor-not-allowed'
                } ${disabled && 'opacity-50'}`}
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
                onKeyDown={(event) => {
                  switch (event.key) {
                    case 'ArrowDown':
                      if (!isOpen && !disabled && !readOnly) {
                        setFocused(focused === 0 ? focused : focused - 1)
                        setOpen(true)
                      }
                      break
                    case 'Tab':
                    case 'Escape':
                      if (isOpen) setOpen(false)
                      break
                    default:
                      break
                  }
                }}
                onFocus={() => {
                  if (!readOnly && !disabled) setOpen(true)
                }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </>
          ) : (
            <>
              <input
                className={`bg-transparent w-full outline-none ${
                  isLoading && 'pointer-events-none cursor-not-allowed'
                } ${disabled && 'opacity-50'}`}
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
                type="text"
                id={id}
                {...inputProps}
                ref={inputRef}
                disabled={disabled}
                readOnly={readOnly || isLoading || !isSearchable}
                placeholder={placeholder || 'Select...'}
                onChange={(e) => {
                  if (isSearchable) {
                    setSearch(e.target.value)
                  }
                }}
                onFocus={() => {
                  if (!readOnly && !disabled) setOpen(true)
                }}
                onKeyDown={(event) => {
                  switch (event.key) {
                    case 'ArrowDown':
                      if (!isOpen && !disabled && !readOnly) {
                        setFocused(focused === 0 ? focused : focused - 1)
                        setOpen(true)
                      }
                      break
                    case 'Tab':
                    case 'Escape':
                      if (isOpen) setOpen(false)
                      break
                    default:
                      break
                  }
                }}
                value={search}
              />
            </>
          )}
          {!isLoading && !readOnly && (
            <span className="flex mx-1 h-6 w-6 items-center justify-center">
              <ChevronDownIcon
                width={12}
                height={12}
                className={`fill-current ${
                  isOpen ? 'text-primary-600' : 'text-gray-400'
                }`}
              />
            </span>
          )}
          {isLoading && (
            <Loader className="mx-1" size="sm" color="primary-800" />
          )}
        </div>
        {!isLoading && (
          <OptionList
            isMulti={isMulti}
            name={name}
            ref={listRef}
            isOpen={isOpen}
            options={
              !isSearchable || !search
                ? options
                : options?.filter((option: SelectOptionType) =>
                    (option[textKey] as string)
                      ?.toLowerCase()
                      .replace(/\s+/g, '')
                      .includes(search.toLowerCase().replace(/\s+/g, ''))
                  )
            }
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
  }
)

Select.displayName = 'Select'
export default Select
