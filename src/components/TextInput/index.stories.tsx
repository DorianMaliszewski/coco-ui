import React from 'react'
import { Story, Meta } from '@storybook/react'
import TextInput, { TextInputProps } from '.'

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />

export const Basic = Template.bind({})
Basic.args = {}
