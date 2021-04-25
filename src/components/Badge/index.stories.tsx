import React from 'react'
import { Story, Meta } from '@storybook/react'
import Badge, { BadgeProps } from '.'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta

const Template: Story<BadgeProps> = (args) => <Badge {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Basic',
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'outline',
  variant: 'outline',
}
export const NoBorder = Template.bind({})
NoBorder.args = {
  children: 'no-border',
  variant: 'no-border',
}
