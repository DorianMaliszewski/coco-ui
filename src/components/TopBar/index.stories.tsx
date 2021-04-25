import React from 'react'
import { Story, Meta } from '@storybook/react'
import TopBar, { TopBarProps } from '.'

export default {
  title: 'Components/TopBar',
  component: TopBar,
} as Meta

const Template: Story<TopBarProps> = (args) => <TopBar {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Test',
}
