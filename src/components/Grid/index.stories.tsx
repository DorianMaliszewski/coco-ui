import React from 'react'
import { Story, Meta } from '@storybook/react'
import Grid, { GridProps } from '.'

export default {
  title: 'Components/Grid',
  component: Grid,
} as Meta

const Template: Story<GridProps> = (args) => (
  <Grid {...args}>
    <Grid.Item className="bg-primary-500 text-center text-white font-bold rounded border border-primary-700">
      1
    </Grid.Item>
    <Grid.Item className="bg-primary-500 text-center text-white font-bold rounded border border-primary-700">
      2
    </Grid.Item>
    <Grid.Item className="bg-primary-500 text-center text-white font-bold rounded border border-primary-700">
      3
    </Grid.Item>
    <Grid.Item className="bg-primary-500 text-center text-white font-bold rounded border border-primary-700">
      4
    </Grid.Item>
    <Grid.Item className="bg-primary-500 text-center text-white font-bold rounded border border-primary-700">
      5
    </Grid.Item>
    <Grid.Item className="bg-primary-500 text-center text-white font-bold rounded border border-primary-700">
      6
    </Grid.Item>
  </Grid>
)

export const Basic = Template.bind({})
Basic.args = {
  children: 'Basic',
  className: 'w-full',
  cols: 3,
  gap: 1,
}
