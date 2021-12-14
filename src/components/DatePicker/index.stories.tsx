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
Basic.args = {}
