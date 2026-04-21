import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '../Badge/Badge'
import { Button } from '../Button/Button'
import { Text } from '../Text/Text'
import { Container } from './Container'

const meta = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const ColumnStack: Story = {
  args: {
    children: null,
    flexDirection: 'column',
    gap: 'md',
    padding: 'md',
    justifyContent: 'start',
  },
  render: (args) => (
    <Container {...args}>
      <Text as="h2">Title</Text>
      <Text as="p">
        A column container stacks children vertically with a consistent gap.
      </Text>
      <Container justifyContent="center" padding="xs">
        <Button label="Action" onClick={() => {}} />
      </Container>
    </Container>
  ),
}

export const RowStack: Story = {
  args: {
    children: null,
    flexDirection: 'row',
    gap: 'md',
    padding: 'md',
    justifyContent: 'start',
  },
  render: (args) => (
    <Container {...args}>
      <Badge value="Draft" />
      <Badge value="In Review" />
      <Badge value="Done" />
    </Container>
  ),
}

export const CenteredContent: Story = {
  args: {
    children: null,
    flexDirection: 'row',
    gap: 'sm',
    padding: 'lg',
    justifyContent: 'center',
  },
  render: (args) => (
    <Container {...args}>
      <Badge value="Draft" />
      <Badge value="In Review" />
      <Badge value="Done" />
    </Container>
  ),
}

export const SpacingVariants: Story = {
  args: { children: null, flexDirection: 'column', gap: 'xl', padding: 'xl' },
  render: (args) => (
    <Container {...args}>
      <Container flexDirection="row" gap="xs" padding="xs">
        <Badge value="xs gap" />
        <Badge value="xs padding" />
      </Container>
      <Container flexDirection="row" gap="md" padding="md">
        <Badge value="md gap" />
        <Badge value="md padding" />
      </Container>
      <Container flexDirection="row" gap="xl" padding="xl">
        <Badge value="xl gap" />
        <Badge value="xl padding" />
      </Container>
    </Container>
  ),
}
