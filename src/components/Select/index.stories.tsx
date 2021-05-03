import React from 'react'
import { Story, Meta } from '@storybook/react'
import Select, { SelectProps } from '.'

export default {
  title: 'Components/Select',
  component: Select,
} as Meta

const Template: Story<SelectProps> = ({ ...props }: SelectProps) => {
  const ref = React.useRef<HTMLInputElement>(null)
  const [value, setValue] = React.useState()

  return (
    <Select
      {...props}
      value={value}
      onChange={(result) => setValue(result)}
      ref={ref}
    />
  )
}

export const Basic = Template.bind({})
Basic.decorators = [
  (Story) => (
    <div style={{ minHeight: '10rem' }} className="w-full items-start flex">
      <Story />
    </div>
  ),
]

Basic.args = {
  options: [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
  ],
}

export const Labeled = Template.bind({})
Labeled.args = {
  label: 'My awesome label',
  options: [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
  ],
}
