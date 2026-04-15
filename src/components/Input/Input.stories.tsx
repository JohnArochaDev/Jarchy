import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered', // Styling for the component in the Storybook canvas
  },
  tags: ['autodocs'], // Creates documentation for the component
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    type: 'text',
    value: '',
    placeholder: 'Text here',
    // errors: ['Invalid Format', 'Only Alphanumeric Characters Allowed'], // for testing errors
    errors: [],
    size: 'md',
  },
}
