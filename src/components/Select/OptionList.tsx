import React from 'react'
import { SelectOptionType, ValueType } from '.'
import Option, { RenderSelectOptionProps } from './Option'

interface OptionListProps {
  focused: string | number
  isOpen?: boolean
  name: string
  options: SelectOptionType[]
  onOptionClick: (option: SelectOptionType, event: React.MouseEvent) => void
  value?: ValueType
  isMulti?: boolean
}

const OptionList = React.forwardRef<HTMLDivElement, OptionListProps>(
  (
    {
      focused,
      isOpen,
      name,
      options,
      onOptionClick,
      value,
      isMulti,
    }: OptionListProps,
    ref
  ) => {
    return (
      <div
        className={`z-10 absolute top-full left-0 ${
          isOpen
            ? 'border shadow bg-white mt-1 max-h-40 w-full overflow-y-scroll'
            : 'sr-only'
        }`}
        ref={ref}
        aria-label={`${name} listbox`}
        id={name + '-list'}
        role="listbox"
      >
        {options.map((option: SelectOptionType, index: number) => (
          <Option
            focused={focused}
            key={option.value}
            isMulti={isMulti}
            option={option}
            index={index}
            onOptionClick={onOptionClick}
            value={value}
          />
        ))}
      </div>
    )
  }
)

OptionList.displayName = 'OptionList'

export default OptionList
