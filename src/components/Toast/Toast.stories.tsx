import type { Meta, StoryObj } from '@storybook/react-vite'

import { Toast } from './Toast'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered', // Styling for the component in the Storybook canvas
  },
  tags: ['autodocs'], // Creates documentation for the component
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: '',
  },
}
