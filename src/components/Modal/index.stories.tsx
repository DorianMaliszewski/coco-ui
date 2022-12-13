import React from 'react'
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
