import React from 'react'
import { Story, Meta } from '@storybook/react'
import Icon, { IconProps } from '.'

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const Basic = Template.bind({})
Basic.args = {
  name: 'academic-cap',
}
