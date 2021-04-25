import React from 'react'
import Option, { RenderSelectOptionProps } from './Option'

interface OptionListProps {
  focused: number
  isOpen?: boolean
  name: string
  options: any
  onOptionClick: (option: any, event: React.MouseEvent) => any
  valueKey: string
  textKey: string
  value: any
  isMulti?: boolean
  renderOption?: (optionProps: RenderSelectOptionProps) => React.ReactNode
}

const OptionList = React.forwardRef<HTMLDivElement, OptionListProps>(
  (
    {
      focused,
      isOpen,
      name,
      options,
      onOptionClick,
      valueKey,
      textKey,
      value,
      isMulti,
      renderOption,
    }: OptionListProps,
    ref
  ) => {
    return (
      <div
        className={`absolute top-full left-0 ${
          isOpen
            ? 'border shadow bg-white mt-1 max-h-40 w-full overflow-y-scroll'
            : 'sr-only'
        }`}
        ref={ref}
        id={name + '-list'}
        role="listbox"
      >
        {options.map((option: any, index: number) => (
          <Option
            renderOption={renderOption}
            focused={focused}
            key={option[valueKey]}
            isMulti={isMulti}
            option={option}
            index={index}
            valueKey={valueKey}
            textKey={textKey}
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
