import React from 'react'
import { Story, Meta } from '@storybook/react'
import Radio, { RadioProps } from '.'

export default {
  title: 'Components/Radio',
  component: Radio,
} as Meta

export const Basic: Story<RadioProps> = ({ ...props }: RadioProps) => {
  const [isChecked, setChecked] = React.useState('1')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value)
  }

  return (
    <div className="flex flex-col">
      <Radio
        {...props}
        value={1}
        checked={isChecked === '1'}
        onChange={onChange}
      >
        Radio 1
      </Radio>
      <Radio
        {...props}
        value={2}
        checked={isChecked === '2'}
        onChange={onChange}
      >
        Radio 2
      </Radio>
    </div>
  )
}

Basic.args = {
  children: 'Basic',
  value: 'test',
  name: 'test',
  className: 'w-fit',
}
