import classNames from 'classnames'
import React from 'react'
import { SelectOptionType, ValueType } from '.'
import Option from './Option'

const optionListClassNames =
  'z-100 absolute top-full left-0 border shadow bg-white mt-1 max-h-40 w-full overflow-y-scroll'

type OptionListProps = {
  focused: string | number
  isOpen?: boolean
  options: SelectOptionType[]
  onOptionClick: (option: SelectOptionType, event: React.MouseEvent) => void
  value?: ValueType
  isMulti?: boolean
}

const OptionList = ({
  focused,
  isOpen,
  options,
  onOptionClick,
  value,
  isMulti,
}: OptionListProps): JSX.Element => (
  <div
    className={classNames({
      [optionListClassNames]: true,
      'sr-only': !isOpen,
    })}
    role="listbox"
  >
    {options.map((option: SelectOptionType) => (
      <Option
        focused={focused}
        key={option.value}
        isMulti={isMulti}
        option={option}
        onOptionClick={onOptionClick}
        value={value}
      />
    ))}
  </div>
)

OptionList.displayName = 'OptionList'

export default OptionList
