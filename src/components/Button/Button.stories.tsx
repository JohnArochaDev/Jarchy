import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered', // Styling for the component in the Storybook canvas
  },
  tags: ['autodocs'], // Creates documentation for the component
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Button',
    disabled: false,
    toggle: false,
    onClick: () => {},
    toggledState: false,
  },
}
