import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../Button/Button'
import { Text } from '../Text/Text'
import { Spacer } from './Spacer'

const meta = {
  title: 'Components/Spacer',
  component: Spacer,
  parameters: {
    layout: 'centered', // Styling for the component in the Storybook canvas
  },
  tags: ['autodocs'], // Creates documentation for the component
} satisfies Meta<typeof Spacer>

export default meta
type Story = StoryObj<typeof meta>

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    size: 'md',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', width: 300 }}>
      <Text as="h3">Section Title</Text>
      <Spacer {...args} />
      <Button label="Confirm" onClick={() => {}} />
    </div>
  ),
}

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    size: 'md',
  },
  render: (args) => (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Text as="span">Label</Text>
      <Spacer {...args} />
      <Button label="Confirm" onClick={() => {}} />
    </div>
  ),
}
