import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '../Badge'
import { Tooltip } from './Tooltip'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered', // Styling for the component in the Storybook canvas
  },
  tags: ['autodocs'], // Creates documentation for the component
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Tooltip Shown',
    children: <Badge value="Hover me" />,
  },
}
