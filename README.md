# Jarchy

A personal React component library published to GitHub Packages. Provides 17 ready-to-use, fully typed UI components with SCSS module styling and Storybook documentation.

**Package:** `@johnarochadev/jarchy` &nbsp;|&nbsp; **Version:** 3.0.0 &nbsp;|&nbsp; **License:** Proprietary

---

## Installation

Add the following to your project's `.npmrc` to point to GitHub Packages:

```
@johnarochadev:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Set `NODE_AUTH_TOKEN` to a GitHub personal access token with `read:packages` scope, then install:

```bash
npm install @johnarochadev/jarchy
```

## Usage

Add the following import once to the entry of your project (main.tsx):

```ts
import '@johnarochadev/jarchy/dist/index.css'
```

Import any component directly from the package:

```tsx
import { Button, Input, Modal, Toast, Spinner } from '@johnarochadev/jarchy';

function App() {
  return (
    <Button label="Save" theme="theme-black" onClick={() => {}} />
  );
}
```

---

## Components

### Form

| Component | Description |
|-----------|-------------|
| `Button` | Interactive button with themes (`theme-black`, `theme-white`, `theme-green`, `theme-red`), disabled state, and toggle behavior |
| `Input` | Text input supporting `text`, `password`, `email`, `search`, `url`, `tel` types with error display and sizing (`xs`–`xl`, `full`) |
| `TextArea` | Multi-line text input for forms |
| `Checkbox` | Binary choice with checked, unchecked, and indeterminate states |
| `Radio` | Single option within a radio group |
| `RadioGroup` | Container that manages a list of radio options |
| `Select` | Dropdown selection with custom styling |

### Feedback & Status

| Component | Description |
|-----------|-------------|
| `Toast` | Auto-dismissing notification with `success`/`error` variants, configurable duration, and an animated progress bar |
| `Spinner` | Animated SVG loading indicator with size (`xs`, `sm`, `md`, `lg`, `xl`, or numeric px) and color props |
| `Badge` | Small inline label for statuses or counts with theme support |

### Layout & Structure

| Component | Description |
|-----------|-------------|
| `Container` | Flex-based layout wrapper with `flexDirection`, `justifyContent`, `gap`, `padding`, and polymorphic `as` prop |
| `Spacer` | Spacing utility with preset sizes (`xs`, `sm`, `md`, `lg`, `xl`) |
| `Divider` | Horizontal or vertical separator line |
| `Card` | Bordered surface for grouping content |

### Overlay

| Component | Description |
|-----------|-------------|
| `Modal` | Overlay dialog with header, content area, Save/Cancel actions, close button, and configurable max-width |
| `Tooltip` | Hover-triggered tooltip with placement options (`top`, `bottom`, `left`, `right`) and full accessibility attributes |

### Typography

| Component | Description |
|-----------|-------------|
| `Text` | Styled typography component with size and weight variants |

---

## Exported Types

```ts
import type {
  FlexDirection,    // 'column' | 'row'
  JustifyContent,   // 'center' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly'
  SpacingSize,      // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  DividerType,
  RadioOption,
  SpinnerProps,
  SpinnerSize,
  SelectOption,
} from '@johnarochadev/jarchy';
```

---

## Development

### Prerequisites

- Node.js 18+
- npm 9+

```bash
git clone https://github.com/JohnArochaDev/Jarchy.git
cd Jarchy
npm install
```

### Storybook

Storybook is the local dev environment for building and previewing components in isolation with hot reload.

```bash
npm run storybook
```

Opens at `http://localhost:6006`. Autodocs pages are generated automatically from component props and story files.

### Publishing a new version

Make sure all changes are committed before releasing:

```bash
git add .
git commit -m "your message"
```

Then run the appropriate release command:

```bash
# Bug fixes, small changes (e.g. 1.0.0 → 1.0.1)
npm run release:patch

# New components, new features (e.g. 1.0.0 → 1.1.0)
npm run release:minor

# New Releases, overhauls (e.g. 1.0.0 → 2.0.0)
npm run release:minor
```

Push the version commit and tag that npm creates:

```bash
git push && git push --tags
```

---

## Adding a New Component

1. Create a folder under `src/components/ComponentName/`
2. Add the following files:

```
ComponentName/
├── ComponentName.tsx          # Component implementation
├── ComponentName.stories.tsx  # Storybook stories
├── styles.module.scss         # Scoped SCSS styles
└── index.ts                   # Barrel export
```

3. Export it from `src/index.ts`

#### Story file template

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ComponentName } from './ComponentName';

const meta = {
  title: 'Components/ComponentName',
  component: ComponentName,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // component props here
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
```

---

## Build Output

The library is bundled with `tsup` and ships both ESM and CommonJS targets:

| File | Format |
|------|--------|
| `dist/index.mjs` | ESM |
| `dist/index.js` | CommonJS |
| `dist/index.d.ts` | TypeScript declarations |

React is a peer dependency and is never bundled.
