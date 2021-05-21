import React from 'react'
import { Story, Meta } from '@storybook/react'
import TextInput, { TextInputProps } from '.'

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />

export const Basic = Template.bind({})
Basic.args = {}
export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'My awesome label',
}

export const Multiline = Template.bind({})
Multiline.args = {
  multiline: true,
  autoResizeHeight: true,
  className: '',
  rows: 1,
  defaultValue:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin scelerisque suscipit. Sed finibus fermentum nisl, at fringilla ante ultricies ac. Duis condimentum est vitae ipsum cursus, at euismod mi dapibus. Proin porttitor consequat tempus. Morbi placerat eros eget orci imperdiet, a aliquet nunc lobortis. Curabitur vehicula molestie vehicula. Maecenas vel erat sed ipsum auctor ultrices. Aenean nulla massa, molestie eu turpis eget, eleifend pellentesque felis. Cras sit amet nisi viverra augue rhoncus sagittis et eu ante. Cras nec hendrerit quam. Maecenas bibendum pellentesque sapien, vel cursus urna sagittis eget. Nunc tincidunt, libero eu suscipit pellentesque, quam augue bibendum urna, et egestas tellus orci sit amet nulla.',
}
