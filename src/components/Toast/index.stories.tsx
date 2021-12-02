import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ToastProps, ToastVariant } from './Toast'
import { ToastProvider } from '.'
import { useToast } from './ToastProvider'
import { Button, Grid } from 'index'

export default {
  title: 'Components/Toast',
  component: ToastProvider,
  decorators: [
    (ToastStory) => (
      <ToastProvider>
        <ToastStory />
      </ToastProvider>
    ),
  ],
} as Meta

export const Basic: Story<ToastProps> = ({
  render,
  duration,
  variant,
}: ToastProps) => {
  const toast = useToast()

  const showToast = () => {
    toast.show(render, { duration, variant })
  }

  return (
    <>
      <Button size="md" onClick={showToast}>
        Show toast
      </Button>
    </>
  )
}

Basic.args = {
  duration: 3000,
  render: 'Test message',
  variant: 'default',
}

export const Variants: Story<ToastProps> = () => {
  const toast = useToast()

  const showToast = (variant: ToastVariant) => () => {
    toast.show(variant, { variant })
  }

  return (
    <Grid gap={1}>
      <Button variant="success" size="md" onClick={showToast('success')}>
        success
      </Button>
      <Button variant="error" size="md" onClick={showToast('error')}>
        error
      </Button>
      <Button variant="warning" size="md" onClick={showToast('warning')}>
        warning
      </Button>
      <Button variant="info" size="md" onClick={showToast('info')}>
        info
      </Button>
      <Button variant="secondary" size="md" onClick={showToast('default')}>
        default
      </Button>
    </Grid>
  )
}
