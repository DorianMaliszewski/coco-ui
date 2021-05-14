import React from 'react'
import { Story, Meta } from '@storybook/react'
import Modal, { ModalProps } from '.'
import Button from 'components/Button'

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta

export const Basic: Story<ModalProps> = ({ open, ...props }: ModalProps) => {
  const [isOpen, setIsOpen] = React.useState(open)

  return (
    <>
      <Button size="md" onClick={() => setIsOpen(true)}>
        Open modal
      </Button>
      <Modal {...props} open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

Basic.args = {
  children: 'Basic',
  open: true,
}
