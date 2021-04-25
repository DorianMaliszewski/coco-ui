import React from 'react'
import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta

export const Basic: Story<CheckboxProps> = ({
  checked,
  ...props
}: CheckboxProps) => {
  const [isChecked, setChecked] = React.useState(checked)

  const onChange = () => {
    setChecked(!isChecked)
  }

  return <Checkbox {...props} checked={isChecked} onChange={onChange} />
}

Basic.args = {
  children: 'Basic',
  defaultChecked: undefined,
  checked: true,
}
