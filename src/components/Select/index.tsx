import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { ReactComponent as Loader } from './loading.svg'
import { RenderSelectOptionProps } from './Option'
import OptionList from './OptionList'

export interface SelectProps {
  className?: string
  id?: string
  name?: string
  options: any
  placeholder?: string
  onChange: (result: any[] | any) => any
  value: any
  parentRef?: React.RefObject<any>
  disabled?: boolean
  readOnly?: boolean
  tabIndex?: number
  isLoading?: boolean
  isSearchable?: boolean
  isMulti?: boolean
  textKey?: string
  valueKey?: string
  renderSelected?: (values: any) => React.ReactNode
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
          ? value.map((value: any) => value[textKey]).join(', ')
          : value[textKey],
      renderOption,
    }: SelectProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const [isOpen, setOpen] = React.useState(false)
    const [search, setSearch] = React.useState('')
    const listRef = React.useRef<HTMLDivElement>(null)
    const containerRef = React.useRef<HTMLDivElement>(parentRef?.current)
    const [focused, setFocused] = React.useState(0)
    const inputProps = {
      tabIndex: tabIndex ?? -1,
    }

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

    const handleClickForMulti = (option: any) => {
      if (!value) {
        onChange([option])
        return
      }
      const index = value?.findIndex(
        (v: any) => v[valueKey] === option[valueKey]
      )
      if (index > -1) {
        const tmp = [...value]
        tmp.splice(index, 1)
        onChange([...tmp])
      } else {
        onChange([...value, option])
      }

      ;(ref as React.RefObject<any>)?.current.focus()
    }

    const handleClickForSingle = (option: any) => {
      onChange(option)
      setSearch(option[textKey])
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
          ;(ref as React.RefObject<any>)?.current.focus()
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
          (option: any) => option[valueKey] === value
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
              ? options.find(
                  (option: any) =>
                    option[valueKey] === value ||
                    option[valueKey] === value[valueKey]
                )?.[textKey]
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
        } border-gray-300 rounded p-2 flex items-center ${
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
                  {renderSelected(value || [])}
                </div>
              )}
              <input
                className={`flex-grow outline-none ${
                  isLoading && 'pointer-events-none cursor-not-allowed'
                } ${disabled && 'opacity-50'}`}
                aria-expanded={isOpen}
                aria-controls={name + '-list'}
                aria-owns={name + '-list'}
                aria-activedescendant={
                  options.find((option: any) => option[valueKey] === value)?.[
                    valueKey
                  ]
                }
                role="combobox"
                aria-haspopup="listbox"
                id={id}
                placeholder={placeholder || 'Select...'}
                {...inputProps}
                ref={ref}
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
                className={`w-full outline-none ${
                  isLoading && 'pointer-events-none cursor-not-allowed'
                } ${disabled && 'opacity-50'}`}
                aria-expanded={isOpen}
                aria-controls={name + '-list'}
                aria-owns={name + '-list'}
                aria-activedescendant={
                  options.find((option: any) => option.value === value)?.value
                }
                role="combobox"
                aria-haspopup="listbox"
                type="text"
                id={id}
                {...inputProps}
                ref={ref}
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
            <span className="flex px-1">
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
            <Loader className="animate-spin mx-1 h-5 w-5 text-primary-400" />
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
                : options?.filter((option: any) =>
                    option[textKey]
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
            onOptionClick={(option: any, event: React.MouseEvent) => {
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
