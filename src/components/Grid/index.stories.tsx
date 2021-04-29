import React from 'react'
import { Story, Meta } from '@storybook/react'
import Grid from '.'

export default {
  title: 'Components/Grid',
  component: Grid,
} as Meta

const Template: Story = (args) => <Grid {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Basic',
}
