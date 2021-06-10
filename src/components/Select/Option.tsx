import { CheckIcon } from '@heroicons/react/solid'
import React from 'react'
import { SelectOptionType } from '.'

export interface RenderSelectOptionProps {
  option: SelectOptionType
  isSelected?: boolean
}

interface OptionProps {
  isMulti?: boolean
  value: SelectOptionType | SelectOptionType[]
  valueKey: string
  textKey: string
  option: SelectOptionType
  focused: number
  index: number
  renderOption?: (option: RenderSelectOptionProps) => React.ReactNode
  onOptionClick: (option: SelectOptionType, event: React.MouseEvent) => void
}

const Option = ({
  isMulti,
  value,
  valueKey,
  textKey,
  option,
  focused,
  renderOption = ({ option, isSelected }: RenderSelectOptionProps) => (
    <div className="flex items-center">
      {option[textKey]}
      {isMulti && isSelected ? (
        <CheckIcon className="fill-current h-4 w-4" />
      ) : null}
    </div>
  ),
  onOptionClick,
}: OptionProps): JSX.Element => {
  const isSelected = React.useMemo(() => {
    return isMulti
      ? (value as SelectOptionType[])?.findIndex(
          (v: SelectOptionType) => v[valueKey] === option[valueKey]
        ) > -1
      : option[valueKey] === value
  }, [value, valueKey, option, isMulti])

  return (
    <div
      className={`truncate py-1 px-1 hover:bg-primary-600 hover:text-white cursor-pointer ${
        focused === option ? 'bg-primary-600 text-white' : ''
      } ${isSelected && focused !== option ? 'text-primary-600' : ''}`}
      key={option[valueKey]}
      id={option[valueKey]}
      role="option"
      aria-selected={isSelected}
      onClick={(event) => onOptionClick(option, event)}
    >
      {renderOption({ option, isSelected })}
    </div>
  )
}

export default Option
