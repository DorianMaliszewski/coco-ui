import React from 'react'
import { Story, Meta } from '@storybook/react'
import Input, { InputProps } from '.'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Basic = Template.bind({})

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'My awesome label',
  variant: 'inside',
}

export const Error = Template.bind({})
Error.args = {
  value: 'test',
  label: 'My awesome label',
  error: 'Test error',
}
