import React from 'react'
import { Story, Meta } from '@storybook/react'
import Radio, { RadioProps } from '.'

export default {
  title: 'Components/Radio',
  component: Radio,
} as Meta

export const Basic: Story<RadioProps> = ({ label, ...props }: RadioProps) => {
  const [isChecked, setChecked] = React.useState('1')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value)
  }

  return (
    <div className="flex flex-col">
      <Radio
        {...props}
        value={1}
        label={label && `${label}-1`}
        checked={isChecked === '1'}
        onChange={onChange}
        labelPosition="right"
      />
      <Radio
        {...props}
        value={2}
        label={label && `${label}-2`}
        checked={isChecked === '2'}
        onChange={onChange}
        labelPosition="right"
      />
    </div>
  )
}

Basic.args = {
  children: 'Basic',
  value: 'test',
  name: 'test',
  label: 'test',
}
