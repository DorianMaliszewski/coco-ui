import React from 'react'
import { Story, Meta } from '@storybook/react'
import Switch, { SwitchProps } from '.'

export default {
  title: 'Components/Switch',
  component: Switch,
} as Meta

const Template: Story<SwitchProps> = ({
  checked,
  defaultChecked,
  onChange,
  ...props
}: SwitchProps) => {
  const [isChecked, setIsChecked] = React.useState(checked)
  return (
    <Switch
      checked={isChecked}
      onChange={(event) => {
        setIsChecked(!isChecked)
      }}
      {...props}
    />
  )
}

export const Basic = Template.bind({})
Basic.args = {
  children: 'My awesome switch',
  id: 'test',
  value: 'on',
}

export const Position = Template.bind({})
Position.args = {
  children: 'My awesome switch',
  id: 'test',
  value: 'on',
  labelPosition: 'left',
}

export const Buttons = Template.bind({})
Buttons.args = {
  children: 'My awesome switch',
  id: 'test',
  value: 'on',
  variant: 'buttons',
  onChildren: 'True',
  offChildren: 'False',
}

export const Button = Template.bind({})
Button.args = {
  children: 'My awesome switch',
  id: 'test',
  value: 'on',
  variant: 'button',
}
