import React from 'react'
import { Story, Meta } from '@storybook/react'
import TextArea, { TextAreaProps } from '.'

export default {
  title: 'Components/TextArea',
  component: TextArea,
} as Meta

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />

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
