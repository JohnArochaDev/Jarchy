import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { TextArea } from './TextArea'

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered', // Styling for the component in the Storybook canvas
  },
  tags: ['autodocs'], // Creates documentation for the component
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

const DefaultRender: Story['render'] = (args) => {
  const [value, setValue] = useState<string>('')

  const errors =
    value.length > 10 ? 'Value must be 10 characters or fewer' : undefined

  return (
    <TextArea {...args} value={value} onChange={setValue} errors={errors} />
  )
}

export const Default: Story = {
  render: DefaultRender,
  args: {
    value: '',
    label: 'Label',
    placeholder: 'Text here',
  },
}
