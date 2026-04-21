import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { Button } from '../Button'
import { Container } from '../Container'
import { Input } from '../Input/Input'
import { Spacer } from '../Spacer/Spacer'
import { Text } from '../Text/Text'
import { Modal } from './Modal'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '90vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const WithTextAndTitleModal = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Container justifyContent="center">
        <Button onClick={() => setShowModal(true)} label="Open Modal" />
      </Container>

      <Modal
        title="About"
        maxWidth="400px"
        content={
          <div style={{ textIndent: '1rem' }}>
            <Text as="p">
              This is a Modal with a simple text body. It can be used to display
              summaries, descriptions, or any other short-form content.
            </Text>
          </div>
        }
        onSave={() => setShowModal(false)}
        onClose={() => setShowModal(false)}
        showModal={showModal}
      />
    </>
  )
}

export const WithTextAndTitle: Story = {
  args: {
    content: '',
    maxWidth: '400px',
    onSave: () => {},
    onClose: () => {},
    showModal: true,
  },
  render: () => <WithTextAndTitleModal />,
}

const WithTextNoTitleModal = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Button onClick={() => setShowModal(true)} label="Open Modal" />
      <Modal
        maxWidth="400px"
        content={
          <div style={{ textIndent: '1rem' }}>
            <Text as="p">
              This is a Modal with a simple text body. It has no title. It can
              be used to display summaries, descriptions, or any other
              short-form content.
            </Text>
          </div>
        }
        onSave={() => setShowModal(false)}
        onClose={() => setShowModal(false)}
        showModal={showModal}
      />
    </>
  )
}

export const WithTextNoTitle: Story = {
  args: {
    content: '',
    maxWidth: '400px',
    onSave: () => {},
    onClose: () => {},
    showModal: true,
  },
  render: () => <WithTextNoTitleModal />,
}

const LoginFormModal = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      <Button onClick={() => setShowModal(true)} label="Open Modal" />
      <Modal
        title="Sign In"
        content={
          <Container justifyContent="center">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={setEmail}
              size="lg"
            />
            <Spacer size="sm" />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={setPassword}
              size="lg"
            />
          </Container>
        }
        onSave={() => setShowModal(false)}
        onClose={() => setShowModal(false)}
        showModal={showModal}
      />
    </>
  )
}

export const LoginForm: Story = {
  args: { content: '', onSave: () => {}, onClose: () => {}, showModal: true },
  render: () => <LoginFormModal />,
}
