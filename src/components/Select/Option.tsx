import { CheckIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import React, { KeyboardEvent, MouseEvent, useCallback, useMemo } from 'react'
import { SelectOptionType, ValueType } from '.'

export interface RenderSelectOptionProps {
  option: SelectOptionType
  isSelected?: boolean
}

const optionClassNames = {
  base: 'truncate py-1 px-1 cursor-pointer hover:bg-primary-300 hover:text-white',
  default: 'text-foreground',
}

const selectedClassNames = 'text-primary-600'
const focusedClassNames = 'bg-primary-600 text-white'

const KEYS = {
  ArrowDown: 'ArrowDown',
  ArrowUp: 'ArrowUp',
  Tab: 'Tab',
  Escape: 'Escape',
  Enter: 'Enter',
}

interface OptionProps {
  isMulti?: boolean
  value?: ValueType
  option: SelectOptionType
  focused: number | string
  onOptionClick: (option: SelectOptionType, event: MouseEvent) => void
}

const Option = ({
  isMulti,
  value,
  option,
  focused,
  onOptionClick,
}: OptionProps): JSX.Element => {
  const isSelected = useMemo(() => {
    return isMulti && Array.isArray(value)
      ? value.includes(option.value)
      : option.value === value
  }, [value, option, isMulti])

  const isFocused = useMemo(() => focused === option.value, [option, focused])

  return (
    <li className={isSelected ? 'bordered' : ''}>
      <button
        role="option"
        className={isFocused ? 'active' : ''}
        onClick={(event) => onOptionClick(option, event)}
      >
        <div className="flex items-center">
          <span className="flex-grow">{option.label}</span>
        </div>
      </button>
    </li>
  )
}

export default Option
