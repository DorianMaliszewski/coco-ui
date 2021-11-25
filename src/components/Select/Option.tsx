import { CheckIcon } from '@heroicons/react/solid'
import React from 'react'
import { SelectOptionType, ValueType } from '.'

export interface RenderSelectOptionProps {
  option: SelectOptionType
  isSelected?: boolean
}

interface OptionProps {
  isMulti?: boolean
  value?: ValueType
  option: SelectOptionType
  focused: number | string
  index: number
  onOptionClick: (option: SelectOptionType, event: React.MouseEvent) => void
}

const Option = ({
  isMulti,
  value,
  option,
  focused,
  onOptionClick,
}: OptionProps): JSX.Element => {
  const isSelected = React.useMemo(() => {
    return isMulti && Array.isArray(value)
      ? value.includes(option.value)
      : option.value === value
  }, [value, option, isMulti])

  return (
    <div
      className={`truncate py-1 px-1 hover:bg-primary-600 hover:text-white cursor-pointer ${
        focused === option.value ? 'bg-primary-600 text-white' : ''
      } ${isSelected && focused !== option.value ? 'text-primary-600' : ''}`}
      key={option.value}
      id={`${option.value}`}
      role="option"
      aria-selected={isSelected}
      onClick={(event) => onOptionClick(option, event)}
    >
      <div className="flex items-center">
        {option.label}
        {isMulti && isSelected ? (
          <CheckIcon className="fill-current h-4 w-4" />
        ) : null}
      </div>
    </div>
  )
}

export default Option
