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
