import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Basic',
  size: 'md',
}

export const Icon = Template.bind({})
Icon.args = {
  children: 'Icon',
  icon: 'plus',
  iconPosition: 'left',
  size: 'md',
  iconSize: 24,
}
