import React from 'react'
import { Story, Meta } from '@storybook/react'
import NumberInput, { NumberInputProps } from '.'

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
} as Meta

export const Basic: Story<NumberInputProps> = (args: NumberInputProps) => (
  <NumberInput {...args} />
)

Basic.args = {
  value: '0',
  name: 'test',
  label: 'test',
}

export const Styled: Story<NumberInputProps> = (args: NumberInputProps) => (
  <NumberInput {...args} />
)

Styled.args = {
  value: '0',
  name: 'test',
  label: 'test',
  width: 20,
  size: 'lg',
}
