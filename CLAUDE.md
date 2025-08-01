# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a SolidJS component library (@livelist/core) built with TypeScript and Vite. It uses pnpm workspaces for monorepo management.

## Key Commands

### Development
```bash
pnpm dev              # Run both library and example in watch mode
pnpm build            # Build the library for production
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm typecheck        # Run TypeScript type checking across all packages
```

### Component Library Development
```bash
cd packages/core
pnpm dev              # Watch mode for library development
pnpm build            # Build library (ES modules + TypeScript declarations)
pnpm typecheck        # Type check library code
```

### Example App Development
```bash
cd example
pnpm dev              # Start Vite dev server (http://localhost:5173)
pnpm build            # Build example app
```

### Publishing
```bash
pnpm changeset        # Create a new changeset for version bumps
pnpm version          # Apply changesets and update versions
pnpm release          # Build and publish to npm
```

## Architecture

### Package Structure
- `/packages/core/` - Main component library
  - `src/components/` - Individual component files (e.g., Button.tsx, Card.tsx)
  - `src/index.tsx` - Central export file for all components
  - `dist/` - Build output (ES modules + TypeScript declarations)
- `/example/` - Demo SolidJS app showcasing components with Tailwind CSS

### Component Patterns
Components follow these conventions:
1. Functional components using SolidJS's `Component<Props>` type
2. Props interfaces extending native HTML attributes (e.g., `ButtonHTMLAttributes`)
3. Use `splitProps` to separate custom props from native attributes
4. Export both component and props interface
5. Styling via Tailwind CSS utility classes

Example pattern:
```tsx
import { Component, JSX, splitProps } from 'solid-js'

export interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const Button: Component<ButtonProps> = (props) => {
  const [local, others] = splitProps(props, ['variant', 'class', 'children'])
  // Implementation...
}
```

### Build Configuration
- **TypeScript**: Strict mode with ESNext target, SolidJS JSX transform
- **Vite**: Builds library as ES modules only with external dependencies
- **CSS**: Components use Tailwind classes; example app includes full Tailwind setup
- **Module System**: Pure ESM (no CommonJS builds)

### Testing
No testing framework is currently set up. When implementing tests, consider adding Vitest with @solidjs/testing-library.

## Development Notes
- Node.js 18+ and pnpm 8+ required
- Always run `pnpm install` after pulling changes
- Library watches for changes automatically during `pnpm dev`
- Components are tree-shakeable (sideEffects: false)
- All exports must be added to `/packages/core/src/index.tsx`