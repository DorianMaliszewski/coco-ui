import React from 'react'
import { Story, Meta } from '@storybook/react'
import Box, { BoxProps } from '.'

export default {
  title: 'Components/Box',
  component: Box,
} as Meta

const Template: Story<BoxProps> = (args) => <Box {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Basic',
}

export const Styling = Template.bind({})
Styling.args = {
  children: 'Styling',
  className: 'p-3 text-primary-600 text-xl font-bold',
}
