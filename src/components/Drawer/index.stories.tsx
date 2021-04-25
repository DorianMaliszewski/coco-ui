import React from 'react'
import { Story, Meta } from '@storybook/react'
import Drawer, { DrawerProps } from '.'
import Button from 'components/Button'

export default {
  title: 'Components/Drawer',
  component: Drawer,
} as Meta

export const Basic: Story<DrawerProps> = ({
  open,
  onClose,
  ...props
}: DrawerProps) => {
  const [isOpen, setIsOpen] = React.useState(open)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open drawer</Button>
      <Drawer {...props} open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

Basic.args = {
  children: 'Basic',
  open: true,
}

export const Position: Story<DrawerProps> = () => {
  const [state, setState] = React.useState<any>('')

  return (
    <>
      <Button onClick={() => setState('top')}>Open top drawer</Button>
      <Button onClick={() => setState('right')}>Open right drawer</Button>
      <Button onClick={() => setState('bottom')}>Open bottom drawer</Button>
      <Button onClick={() => setState('left')}>Open left drawer</Button>
      <Drawer
        position="top"
        open={state === 'top'}
        onClose={() => setState('')}
      >
        {state}
      </Drawer>
      <Drawer
        position="right"
        open={state === 'right'}
        onClose={() => setState('')}
      >
        {state}
      </Drawer>
      <Drawer
        position="bottom"
        open={state === 'bottom'}
        onClose={() => setState('')}
      >
        {state}
      </Drawer>
      <Drawer
        position="left"
        open={state === 'left'}
        onClose={() => setState('')}
      >
        {state}
      </Drawer>
    </>
  )
}
