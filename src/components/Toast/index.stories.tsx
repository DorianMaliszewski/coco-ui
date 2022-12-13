import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react'
import Toast, { ToastProps } from './Toast'
import { ToastProvider } from '.'
import { useToast } from './ToastProvider'
import { Button } from '../../'

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
  children,
  duration,
  variant,
}: ToastProps) => {
  const toast = useToast()

  const showToast = () => {
    toast.show(children, { duration, variant })
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
  children: 'Test message',
  variant: undefined,
}

export const Variants: Story<ToastProps> = () => {
  const toast = useToast()

  const showToast =
    (variant?: ComponentProps<typeof Toast>['variant']) => () => {
      toast.show(variant ?? 'default', { variant })
    }

  return (
    <div className="flex flex-col gap-1">
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
      <Button variant="secondary" size="md" onClick={showToast()}>
        default
      </Button>
    </div>
  )
}
