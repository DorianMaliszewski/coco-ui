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

Basic.args = {
  size: 'md',
  disabled: false,
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
  size: 'md',
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
  size: 'md',
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
  size: 'md',
}

export const Sizes: Story<ActionButtonProps> = (args) => {
  return (
    <>
      <ActionButton {...args} size="xs">
        <ActionButton.Content>xs</ActionButton.Content>
        <ActionButton.Action>Action 1</ActionButton.Action>
        <ActionButton.Action>Action 2</ActionButton.Action>
        <ActionButton.Action>Action 3</ActionButton.Action>
      </ActionButton>
      <ActionButton {...args} size="sm">
        <ActionButton.Content>sm</ActionButton.Content>
        <ActionButton.Action>Action 1</ActionButton.Action>
        <ActionButton.Action>Action 2</ActionButton.Action>
        <ActionButton.Action>Action 3</ActionButton.Action>
      </ActionButton>
      <ActionButton {...args} size="md">
        <ActionButton.Content>md</ActionButton.Content>
        <ActionButton.Action>Action 1</ActionButton.Action>
        <ActionButton.Action>Action 2</ActionButton.Action>
        <ActionButton.Action>Action 3</ActionButton.Action>
      </ActionButton>
      <ActionButton {...args} size="xl">
        <ActionButton.Content>xl</ActionButton.Content>
        <ActionButton.Action>Action 1</ActionButton.Action>
        <ActionButton.Action>Action 2</ActionButton.Action>
        <ActionButton.Action>Action 3</ActionButton.Action>
      </ActionButton>
      <ActionButton {...args} size="2xl">
        <ActionButton.Content>2xl</ActionButton.Content>
        <ActionButton.Action>Action 1</ActionButton.Action>
        <ActionButton.Action>Action 2</ActionButton.Action>
        <ActionButton.Action>Action 3</ActionButton.Action>
      </ActionButton>
    </>
  )
}

Sizes.args = {
  variant: 'primary',
}
