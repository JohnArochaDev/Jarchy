import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Radio } from './Radio'

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

const FruitRadioGroup = () => {
  const [selected, setSelected] = useState('apple')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Radio
        group="fruit"
        value="apple"
        label="Apple"
        checked={selected === 'apple'}
        onChange={setSelected}
      />
      <Radio
        group="fruit"
        value="banana"
        label="Banana"
        checked={selected === 'banana'}
        onChange={setSelected}
      />
    </div>
  )
}

export const Default: Story = {
  args: {
    group: 'fruit',
    value: 'apple',
    label: 'Apple',
    checked: false,
    onChange: () => {},
  },
  render: () => <FruitRadioGroup />,
}
