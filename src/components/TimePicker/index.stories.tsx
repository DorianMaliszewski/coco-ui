import React from 'react'
import { Story, Meta } from '@storybook/react'
import TimePicker, { TimePickerProps } from '.'

export default {
  title: 'Components/TimePicker',
  component: TimePicker,
} as Meta

const Template: Story<TimePickerProps> = ({ ...args }: TimePickerProps) => {
  const [value, setValue] = React.useState<string>('')
  return (
    <TimePicker
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  )
}

export const Basic = Template.bind({})
Basic.args = {
  id: 'test',
}

export const Disabled = Template.bind({})
Disabled.args = {
  id: 'test',
  disabled: true,
}

export const Error = Template.bind({})
Error.args = {
  id: 'test',
  error: true,
}
