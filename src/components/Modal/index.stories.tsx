import React from 'react'
import { Story } from '@storybook/react'
import Modal from '.'
import Button from 'components/Button'

export default {
  title: 'Components/Modal',
  component: Modal,
}

export const Basic: Story = () => (
  <>
    <Modal disclosure={<Button>Open modal</Button>}>
      {() => <>You can close me</>}
    </Modal>
  </>
)
