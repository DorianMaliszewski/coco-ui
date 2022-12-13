import React from 'react'
import { Alert } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: Alert,
} as ComponentMeta<typeof Alert>

export const Default: ComponentStory<typeof Alert> = ({
  children,
  ...props
}) => <Alert {...props}>{children}</Alert>

Default.args = {
  children: 'It gonna be legen wait for it... legendary !',
}
