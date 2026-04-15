import type { Meta, StoryObj } from '@storybook/react-vite'

import { RadioGroup } from './RadioGroup'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    group: 'car',
    defaultValue: 'f150',
    theme: 'theme-black',
    options: [
      { value: 'mustang', label: 'Mustang' },
      { value: 'corvette', label: 'Corvette' },
      { value: 'f150', label: 'Ford F-150' },
    ],
  },
}
