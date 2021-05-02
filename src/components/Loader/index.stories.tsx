import React from 'react'
import { Story, Meta } from '@storybook/react'
import Loader, { LoaderProps } from '.'

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta

const Template: Story<LoaderProps> = (args) => <Loader {...args} />

export const Basic = Template.bind({})
Basic.args = {
  size: 'md',
}
