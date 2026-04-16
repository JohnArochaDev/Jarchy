import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Select } from './Select'

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const DefaultRender: Story['render'] = (args) => {
  const [value, setValue] = useState<string>('')

  return <Select {...args} value={value} onChange={setValue} />
}

export const Default: Story = {
  render: DefaultRender,
  args: {
    label: 'Fruits',
    value: '',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'cherry', label: 'Cherry' },
      { value: 'grape', label: 'Grape' },
      { value: 'orange', label: 'Orange' },
    ],
    onChange: () => {},
    placeholder: 'Select Fruit',
  },
}
