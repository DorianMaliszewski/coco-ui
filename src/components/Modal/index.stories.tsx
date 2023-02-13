import React, { useState } from 'react'
import { Story } from '@storybook/react'
import Modal, { ModalProps } from '.'
import Button from 'components/Button'

export default {
  title: 'Components/Modal',
  component: Modal,
}

export const Basic: Story<Omit<ModalProps, 'disclosure' | 'children'>> = ({
  withoutPortal,
  hideOnClickOutside,
}) => (
  <Modal
    disclosure={<Button>Open modal</Button>}
    withoutPortal={withoutPortal}
    hideOnClickOutside={hideOnClickOutside}
  >
    {<>You can close me</>}
  </Modal>
)

export const Controlled: Story<Omit<ModalProps, 'disclosure' | 'children'>> = ({
  withoutPortal,
  hideOnClickOutside,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true)
        }}
      >
        Open controlled modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        withoutPortal={withoutPortal}
        hideOnClickOutside={hideOnClickOutside}
      >
        {<>You can close me</>}
      </Modal>
    </>
  )
}
