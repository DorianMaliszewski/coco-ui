import React from 'react'
import { Story, Meta } from '@storybook/react'
import Dropdown, { DropdownProps } from '.'
import Button from 'components/Button'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta

export const Basic: Story<DropdownProps> = (args) => {
  return (
    <Dropdown {...args}>
      <Button>Click me</Button>
      <Dropdown.Content>
        <Dropdown.ButtonItem>Action</Dropdown.ButtonItem>
        <Dropdown.ButtonItem>Action</Dropdown.ButtonItem>
        <Dropdown.ButtonItem>Action</Dropdown.ButtonItem>
        <Dropdown.ButtonItem>Action</Dropdown.ButtonItem>
        <Dropdown.ButtonItem>
          Action that has a super long content
        </Dropdown.ButtonItem>
      </Dropdown.Content>
    </Dropdown>
  )
}

export const Customized: Story<DropdownProps> = (args) => {
  return (
    <Dropdown {...args}>
      <Button>Click me</Button>
      <Dropdown.Content className="w-52">
        <Dropdown.ButtonItem>Action</Dropdown.ButtonItem>
        <Dropdown.ButtonItem>Action</Dropdown.ButtonItem>
        <Dropdown.ButtonItem>Action</Dropdown.ButtonItem>
        <Dropdown.ButtonItem>Action</Dropdown.ButtonItem>
        <Dropdown.ButtonItem>
          Action that has a super long content
        </Dropdown.ButtonItem>
      </Dropdown.Content>
    </Dropdown>
  )
}
