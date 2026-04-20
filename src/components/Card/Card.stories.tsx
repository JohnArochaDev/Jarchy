import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { Spacer } from '../Spacer/Spacer'
import { Text } from '../Text/Text'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const WithTextAndTitle: Story = {
  args: { content: '', maxWidth: '400px' },
  render: (args) => (
    <Card
      {...args}
      title="About"
      content={
        <div style={{ textIndent: '1rem' }}>
          <Text as="p">
            This is a card with a simple text body. It can be used to display
            summaries, descriptions, or any other short-form content.
          </Text>
        </div>
      }
    />
  ),
}

export const WithTextNoTitle: Story = {
  args: { content: '', maxWidth: '400px' },
  render: (args) => (
    <Card
      {...args}
      content={
        <div style={{ textIndent: '1rem' }}>
          <Text as="p">
            This is a card with a simple text body. It has no title. It can be
            used to display summaries, descriptions, or any other short-form
            content.
          </Text>
        </div>
      }
    />
  ),
}

const LoginFormCard = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Card
      title="Sign In"
      content={
        <>
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={setEmail}
            size="full"
          />
          <Spacer size="sm" />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={setPassword}
            size="full"
          />
          <Spacer size="md" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Button label="Log In" onClick={() => {}} type="submit" />
            <Spacer direction="horizontal" size="xl" />
            <Button label="Register" onClick={() => {}} type="submit" />
          </div>
        </>
      }
    />
  )
}

export const LoginForm: Story = {
  args: { content: '' },
  render: () => <LoginFormCard />,
}
