import React from 'react'
import { Story, Meta } from '@storybook/react'
import ActionButton, { ActionButtonProps } from '.'

export default {
  title: 'Components/ActionButton',
  component: ActionButton,
} as Meta

export const Basic: Story<ActionButtonProps> = (args) => {
  return (
    <ActionButton {...args}>
      <ActionButton.Content>Basic</ActionButton.Content>
      <ActionButton.Action>Action 1</ActionButton.Action>
      <ActionButton.Action>Action 2</ActionButton.Action>
      <ActionButton.Action>Action 3</ActionButton.Action>
    </ActionButton>
  )
}

export const Primary: Story<ActionButtonProps> = (args) => {
  return (
    <ActionButton {...args}>
      <ActionButton.Content>Primary</ActionButton.Content>
      <ActionButton.Action>Action 1</ActionButton.Action>
      <ActionButton.Action>Action 2</ActionButton.Action>
      <ActionButton.Action>Action 3</ActionButton.Action>
    </ActionButton>
  )
}

Primary.args = {
  variant: 'primary',
}
export const Outlined: Story<ActionButtonProps> = (args) => {
  return (
    <ActionButton {...args}>
      <ActionButton.Content>Outlined</ActionButton.Content>
      <ActionButton.Action>Action 1</ActionButton.Action>
      <ActionButton.Action>Action 2</ActionButton.Action>
      <ActionButton.Action>Action 3</ActionButton.Action>
    </ActionButton>
  )
}

Outlined.args = {
  variant: 'outline',
}

export const NoBorder: Story<ActionButtonProps> = (args) => {
  return (
    <ActionButton {...args}>
      <ActionButton.Content>NoBorder</ActionButton.Content>
      <ActionButton.Action>Action 1</ActionButton.Action>
      <ActionButton.Action>Action 2</ActionButton.Action>
      <ActionButton.Action>Action 3</ActionButton.Action>
    </ActionButton>
  )
}

NoBorder.args = {
  variant: 'no-border',
}
