# Jarchy

A personal React component library published to GitHub Packages.

## Installation

Add the following to your project's `.npmrc`:

```
@johnarochadev:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Then install:

```bash
npm install @johnarochadev/jarchy
```

## Usage

```tsx
import { Button } from '@johnarochadev/jarchy';
```

---

## Development

### Publishing a new version

Before releasing, make sure all changes are committed and the working directory is clean:

```bash
git add .
git commit -m "your message"
```

Then run one of the following:

```bash
# Bug fixes, small changes (1.0.0 → 1.0.1)
npm run release:patch

# New components, new features (1.0.0 → 1.1.0)
npm run release:minor
```

After releasing, push the version bump commit and tag that npm created:

```bash
git push && git push --tags
```

### Adding a new component

1. Create a folder under `src/components/ComponentName/`
2. Add `ComponentName.tsx` and `index.ts` (barrel export)
3. Export it from `src/index.ts`

---

### Storybook

Storybook is a local dev server for building and testing components in isolation with hot reload.

```bash
npm run storybook
```

Opens at `localhost:6006`. Change a component and the browser updates instantly.

#### Writing a story file

Create a `ComponentName.stories.tsx` file next to every component. Here is the full template with comments explaining each line:

```tsx
// Storybook TypeScript types — give you autocomplete when writing stories
import type { Meta, StoryObj } from '@storybook/react-vite';

// fn() creates a spy function that records calls — shows up in the Actions panel
import { fn } from 'storybook/test';

// Your actual component
import { ComponentName } from './ComponentName';

// The meta object is the header for the whole file — describes the component itself
const meta = {
  // Where it appears in the sidebar. '/' creates a folder. e.g. 'Forms/Input' goes under a Forms folder
  title: 'Components/ComponentName',

  // The actual component — used to auto-generate the props table in docs
  component: ComponentName,

  parameters: {
    // How the component is displayed in the canvas
    // 'centered' works for most components, 'fullscreen' for page-level components
    layout: 'centered',
  },

  // Tells Storybook to auto-generate a documentation page for this component
  tags: ['autodocs'],

  // Default props applied to EVERY story in this file
  // Put shared props here so you don't repeat them in every story
  args: {
    onClick: fn(), // fn() so every story gets click tracking automatically
  },
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

// Each exported const is one variant shown in the sidebar
// The name (Default) becomes the label in the sidebar
// args are the props for this specific variant — they merge with args in meta above
export const Default: Story = {
  args: {
    children: 'Button', // whatever props your component accepts
  },
};

// Add more exports for each meaningful variant of your component
// e.g. disabled state, error state, different sizes, etc.
export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};
```
