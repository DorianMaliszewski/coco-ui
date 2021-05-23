import React from 'react'
import { Story, Meta } from '@storybook/react'
import TextArrayInput, { TextArrayInputProps } from '.'

export default {
  title: 'Components/TextArrayInput',
  component: TextArrayInput,
} as Meta

const Template: Story<TextArrayInputProps> = (args) => (
  <TextArrayInput {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  value: ['This', 'is', 'awesome'],
}
