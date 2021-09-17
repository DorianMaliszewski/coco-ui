import React from 'react'
import { Story, Meta } from '@storybook/react'
import Icon, { IconName, IconProps, icons } from '.'

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const Basic = Template.bind({})
Basic.args = {
  name: 'academic-cap',
}

export const All: Story = () => {
  return (
    <div>
      {Object.keys(icons).map((key) => (
        <div key={key} className="flex my-1">
          <Icon className="mr-1" name={key as IconName} />
          {key}
        </div>
      ))}
    </div>
  )
}
