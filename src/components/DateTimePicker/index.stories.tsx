import React from 'react'
import { Story, Meta } from '@storybook/react'
import DateTimePicker, { DateTimePickerProps } from '.'

export default {
  title: 'Components/DateTimePicker',
  component: DateTimePicker,
} as Meta

const Template: Story<DateTimePickerProps> = ({
  ...args
}: DateTimePickerProps) => {
  const [value, setValue] = React.useState<Date | undefined>()
  return (
    <DateTimePicker
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
