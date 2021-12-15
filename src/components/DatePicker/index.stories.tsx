import React from 'react'
import { Story, Meta } from '@storybook/react'
import DatePicker, { DatePickerProps } from '.'

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
} as Meta

const Template: Story<DatePickerProps> = ({ ...args }: DatePickerProps) => {
  const [value, setValue] = React.useState<Date | undefined>()
  return (
    <DatePicker
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  )
}

export const Basic = Template.bind({})
Basic.args = {
  label: 'Basic',
}

export const Labeled = Template.bind({})
Labeled.args = {
  label: 'Labeled',
  variant: 'outside',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled',
  disabled: true,
}

export const Error = Template.bind({})
Error.args = {
  label: 'Error',
  error: true,
}
