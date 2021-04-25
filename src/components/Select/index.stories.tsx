import React from 'react'
import { Story, Meta } from '@storybook/react'
import Select, { SelectProps } from '.'

export default {
  title: 'Components/Select',
  component: Select,
} as Meta

export const Basic: Story<SelectProps> = ({ ...props }) => {
  const ref = React.useRef<any>()
  const [value, setValue] = React.useState()

  return (
    <>
      <Select
        {...props}
        value={value}
        onChange={(result) => setValue(result)}
        ref={ref}
      />
    </>
  )
}

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
