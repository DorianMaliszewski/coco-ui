import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps, BUTTON_SIZES, BUTTON_VARIANTS } from '.'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Basic',
  size: 'md',
}

export const Variants = (): JSX.Element => (
  <div style={{ display: 'flex', gap: 4 }}>
    {Object.keys(BUTTON_VARIANTS).map((variant) => (
      <Button key={variant} variant={variant as ButtonProps['variant']}>
        {variant}
      </Button>
    ))}
  </div>
)
export const Sizes = (): JSX.Element => (
  <div style={{ display: 'flex', gap: 4 }}>
    {Object.keys(BUTTON_SIZES).map((size) => (
      <Button key={size} size={size as ButtonProps['size']}>
        {size}
      </Button>
    ))}
  </div>
)

export const Disabled = (): JSX.Element => (
  <div style={{ display: 'flex', gap: 4 }}>
    {Object.keys(BUTTON_VARIANTS).map((variant) => (
      <Button
        key={variant}
        variant={variant as ButtonProps['variant']}
        disabled
      >
        {variant}
      </Button>
    ))}
  </div>
)
