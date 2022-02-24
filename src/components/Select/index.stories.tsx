import React from 'react'
import { Story, Meta } from '@storybook/react'
import Select, { SelectProps, ValueType } from '.'
import Button from 'components/Button'

export default {
  title: 'Components/Select',
  component: Select,
  args: {
    variant: 'inside',
  },
} as Meta<SelectProps>

const fakeOptions = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
  { label: 'Option 4', value: 4 },
  {
    label: 'Option 5 is a very very very very very very very very long string',
    value: 5,
  },
]

const Template: Story<SelectProps> = ({ ...props }: SelectProps) => {
  const ref = React.useRef<HTMLInputElement>(null)
  const [value, setValue] = React.useState<ValueType>()

  return (
    <Select
      {...props}
      value={value}
      onChange={(result) => setValue(result)}
      ref={ref}
    />
  )
}

Template.args = {
  variant: 'inside',
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
  options: fakeOptions,
}

export const Searchable = Template.bind({})
Searchable.decorators = [
  (Story) => (
    <>
      <Story />
    </>
  ),
]

Searchable.args = {
  options: fakeOptions,
  isSearchable: true,
}

export const Labeled = Template.bind({})
Labeled.args = {
  label: 'My awesome label',
  options: fakeOptions,
  variant: 'outside',
}

export const Multi = Template.bind({})
Multi.args = {
  label: 'Multi select',
  options: fakeOptions,
  isMulti: true,
}

export const Controlled: Story<SelectProps> = ({ ...props }: SelectProps) => {
  const [value, setValue] = React.useState<any>(1)

  const handleReset = () => {
    setValue(undefined)
  }
  return (
    <div className="w-full">
      <Button size="md" className="m-2" onClick={handleReset}>
        Reset
      </Button>
      <Select
        {...props}
        value={value}
        isSearchable
        onChange={(result) => setValue(result)}
      />
      <p>Value is {JSON.stringify(value)}</p>
    </div>
  )
}
Controlled.args = {
  label: 'My awesome label',
  options: fakeOptions,
}
