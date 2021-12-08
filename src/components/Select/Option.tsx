import { CheckIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import React, { MouseEvent, useMemo } from 'react'
import { SelectOptionType, ValueType } from '.'

export interface RenderSelectOptionProps {
  option: SelectOptionType
  isSelected?: boolean
}

const optionClassNames = {
  base:
    'truncate py-1 px-1 cursor-pointer hover:bg-primary-300 hover:text-white',
  default: 'text-foreground',
}

const selectedClassNames = 'text-primary-600'
const focusedClassNames = 'bg-primary-600 text-white'

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
    <div
      className={classNames({
        [optionClassNames.base]: true,
        [optionClassNames.default]: !isSelected,
        [selectedClassNames]: isSelected && !isFocused,

        [focusedClassNames]: isFocused,
      })}
      role="option"
      onClick={(event) => onOptionClick(option, event)}
    >
      <div className="flex items-center">
        <span className="flex-grow">{option.label}</span>
        {isMulti && isSelected ? (
          <CheckIcon className="fill-current h-4 w-4" />
        ) : null}
      </div>
    </div>
  )
}

export default Option
