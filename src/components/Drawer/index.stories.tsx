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
      <Button size="md" onClick={() => setIsOpen(true)}>
        Open drawer
      </Button>
      <Drawer {...props} open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

Basic.args = {
  children: 'Basic',
  open: false,
  hasBackdrop: true,
  withoutPortal: true,
}

export const Position: Story<DrawerProps> = () => {
  const [state, setState] = React.useState<any>('')

  return (
    <>
      <div className="flex gap-2">
        <Button onClick={() => setState('top')}>Open top drawer</Button>
        <Button onClick={() => setState('right')}>Open right drawer</Button>
        <Button onClick={() => setState('bottom')}>Open bottom drawer</Button>
        <Button onClick={() => setState('left')}>Open left drawer</Button>
      </div>
      <Drawer
        withoutPortal
        hasBackdrop
        position="top"
        open={state === 'top'}
        onClose={() => setState('')}
      >
        {state}
      </Drawer>
      <Drawer
        withoutPortal
        hasBackdrop
        position="right"
        open={state === 'right'}
        onClose={() => setState('')}
      >
        {state}
      </Drawer>
      <Drawer
        withoutPortal
        hasBackdrop
        position="bottom"
        open={state === 'bottom'}
        onClose={() => setState('')}
      >
        {state}
      </Drawer>
      <Drawer
        withoutPortal
        hasBackdrop
        position="left"
        open={state === 'left'}
        onClose={() => setState('')}
      >
        {state}
      </Drawer>
    </>
  )
}
