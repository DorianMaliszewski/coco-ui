import React from 'react'
import { Story, Meta } from '@storybook/react'
import example from './example.jpeg'
import Avatar, { AvatarProps } from '.'

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Basic = Template.bind({})
Basic.args = {
  src: example,
  alt: 'Example with image',
  size: 30,
}

export const WithoutImage = Template.bind({})
WithoutImage.args = {
  alt: 'Dorian Maliszewski',
  size: 30,
}
