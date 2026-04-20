import type { Meta, StoryObj } from '@storybook/react-vite'

import { Divider } from './Divider'

const meta = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered', // Styling for the component in the Storybook canvas
  },
  tags: ['autodocs'], // Creates documentation for the component
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'horizontal',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
}

export const Vertical: Story = {
  args: {
    variant: 'vertical',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100px', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
}
