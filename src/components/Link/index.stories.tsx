import React from 'react'
import { Story, Meta } from '@storybook/react'
import Link from '.'

export default {
  title: 'Components/Link',
  component: Link,
} as Meta

const Template: Story<any> = (args) => <Link {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Basic',
}
