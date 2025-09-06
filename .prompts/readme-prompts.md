# README Creation and Maintenance Prompts

This file contains comprehensive prompts for creating and maintaining README files across the @geee-be/react-libraries monorepo.

## Repository Context

**Monorepo Structure:**
- Root package: `@geee-be/react-libraries` (monorepo management)
- Package 1: `@geee-be/react-twui` - UI component library with Tailwind CSS v4
- Package 2: `@geee-be/react-utils` - React hooks and utility functions

**Technology Stack:**
- Package Manager: pnpm with workspaces
- Build Tools: tsup (react-twui), tsc (react-utils)
- CSS Framework: Tailwind CSS v4 (alpha)
- UI Foundation: Radix UI primitives
- Linting: Biome
- Versioning: Changesets
- Development: Storybook

---

## A. Root Monorepo README Prompt

### Purpose
Create a README for the root of the monorepo targeting **developers** who want to contribute to or understand the monorepo structure.

### Requirements

#### 1. Project Header
- Project title and brief description
- Badges for build status, license
- Links to individual packages and documentation

#### 2. Packages Overview
- Brief description of each package with links to their individual READMEs
- Package status (stable, beta, development)
- Links to package documentation and demos

#### 3. Development Setup
- Prerequisites (Node.js version, pnpm)
- Clone and setup instructions
- Available monorepo scripts and commands
- Development workflow

#### 4. Monorepo Architecture
- Package dependencies and relationships
- Build system overview (tsup, tsc)
- Shared tooling (Biome, Changesets, TypeScript)
- CSS/styling approach across packages

#### 5. Contributing
- Development guidelines
- Code standards (Biome, TypeScript)
- Changeset workflow for releases
- Testing requirements
- PR and review process

#### 6. Scripts Reference
- Build commands (`pnpm build`)
- Development commands (`pnpm start:dev`)
- Linting commands (`pnpm lint`)
- Changeset commands (`pnpm changes`)

### Style Guidelines for Root README
- Focus on monorepo management and development
- Include development workflow and contribution guidelines
- Link to individual packages rather than duplicating their docs
- Use clear section headers for different aspects (Development, Architecture, Contributing)

### Key Points to Emphasize
- Monorepo development workflow and tooling
- Contribution guidelines and standards
- Package relationships and dependencies
- Development environment setup
- Release and versioning process

---

## B. Package README Prompts

### Purpose
Create READMEs for individual packages targeting **npm consumers** who want to install and use the packages.

### Package README Template

#### 1. Package Header
```markdown
# @geee-be/[package-name]

[Brief compelling description of the package]

[![npm version](https://badge.fury.io/js/%40geee-be%2F[package-name].svg)](https://www.npmjs.com/package/@geee-be/[package-name])
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
```

#### 2. Installation
```markdown
## Installation

```bash
npm install @geee-be/[package-name]
# or
pnpm add @geee-be/[package-name]
# or
yarn add @geee-be/[package-name]
```

### Peer Dependencies
[List peer dependencies with versions]
```

#### 3. Quick Start
```markdown
## Quick Start

```tsx
import { ComponentOrHook } from '@geee-be/[package-name]';

// Basic usage example
function App() {
  return <ComponentOrHook />;
}
```
```

#### 4. Features (Highlight Key Benefits)
```markdown
## Features

- ✨ [Key feature 1]
- 🎯 [Key feature 2]
- 📱 [Key feature 3]
- ♿ [Accessibility feature]
- 🎨 [Styling/theming feature]
- 📦 Tree-shakeable and optimized
- 🔷 Full TypeScript support
```

#### 5. API Documentation
- Component/hook interfaces with examples
- Props/options with descriptions and types
- Return types and values
- Usage patterns and common scenarios

#### 6. Advanced Usage
- Integration examples
- Customization patterns
- Performance tips
- Best practices

#### 7. Credits and Attribution (for react-twui)
- Acknowledge shadcn/ui as inspiration/foundation
- Credit Radix UI for accessibility primitives
- Thank the broader open source community

---

## C. Package-Specific Requirements

### @geee-be/react-twui README

**Focus Areas:**
- Component showcase with visual examples
- **Compound component API and usage patterns**
- Tailwind CSS integration and setup
- Theme customization and CSS variables
- Accessibility features and ARIA compliance
- Variant system and styling options
- Dark mode support
- Performance and bundle size
- Storybook documentation link
- **Credits and attribution to shadcn/ui and Radix UI**
- **Backward compatibility with both compound and individual imports**

**Key Sections:**
```markdown
## Compound Component Pattern

This library features an intuitive compound component API that makes complex components easier to use:

```tsx
// RECOMMENDED: Modern compound API
import { Dialog, Card, Avatar } from '@geee-be/react-twui';

<Card>
  <Card.Header>
    <Card.Title>User Profile</Card.Title>
  </Card.Header>
  <Card.Content>
    <Avatar>
      <Avatar.Image src="/profile.jpg" />
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar>
  </Card.Content>
</Card>

<Dialog>
  <Dialog.Trigger asChild>
    <Button>Open Dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Confirm Action</Dialog.Title>
    </Dialog.Header>
    <Dialog.Footer>
      <Dialog.Close asChild>
        <Button variant="outline">Cancel</Button>
      </Dialog.Close>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog>

// LEGACY: Original form (still supported for backward compatibility)
import { Card, CardHeader, CardTitle, Avatar, AvatarImage, AvatarFallback } from '@geee-be/react-twui';

<Card>
  <CardHeader>
    <CardTitle>User Profile</CardTitle>
  </CardHeader>
</Card>
```

### Components with Compound API

17 components support the compound pattern:
- **Dialog**: `Dialog.Trigger`, `Dialog.Content`, `Dialog.Header`, etc.
- **Sheet**: `Sheet.Trigger`, `Sheet.Content`, `Sheet.Header`, etc.
- **Drawer**: `Drawer.Trigger`, `Drawer.Content`, `Drawer.Header`, etc.
- **DropdownMenu**: `DropdownMenu.Trigger`, `DropdownMenu.Content`, `DropdownMenu.Item`, etc.
- **Card**: `Card.Header`, `Card.Content`, `Card.Footer`
- **Avatar**: `Avatar.Image`, `Avatar.Fallback`
- **Sidebar**: `Sidebar.Content`, `Sidebar.Menu`, `Sidebar.MenuItem`, etc.
- **And 10 more components...**

## Tailwind CSS Setup

This library requires Tailwind CSS v4. Add to your CSS:

```css
@import 'tailwindcss';
@import '@geee-be/react-twui/css/twui.css';
```

## Theming

Customize the design system using CSS custom properties:

```css
:root {
  --primary: [color];
  --secondary: [color];
}
```

## Components

### Button
[Component example with variants]

### Card
[Component example with compound composition]

## Migration Guide

All existing code continues to work unchanged. New projects can use the compound API for better developer experience:

```tsx
// OLD: Individual imports (still works)
import { Dialog, DialogTrigger, DialogContent } from '@geee-be/react-twui';

// NEW: Compound API (recommended)
import { Dialog } from '@geee-be/react-twui';

<Dialog>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Content>Content</Dialog.Content>
</Dialog>
```

## Credits

This library is built on the shoulders of giants:

- **[shadcn/ui](https://ui.shadcn.com/)** - Many components are based on or inspired by the excellent shadcn/ui component library
- **[Radix UI](https://www.radix-ui.com/)** - Provides the accessible, unstyled component primitives that power our components
- **[Tailwind CSS](https://tailwindcss.com/)** - The utility-first CSS framework that makes styling a joy

Special thanks to [@shadcn](https://github.com/shadcn) for creating an amazing foundation and to the Radix UI team for their commitment to accessibility.
```

### @geee-be/react-utils README

**Focus Areas:**
- Hook usage patterns and examples
- SSR/client-side considerations
- Browser API integrations
- Performance implications
- Framework integration (Next.js, etc.)
- Type safety examples

**Key Sections:**
```markdown
## Hooks Overview

### State Management
- `useLocalState` - Persistent local state
- `useHistoryState` - Browser history integration

### Environment Detection
- `useIsClient` - SSR-safe client detection
- `useIsMobile` - Responsive device detection

### Communication
- `useBroadcastChannel` - Cross-tab messaging

## SSR Compatibility

All hooks are designed to work with server-side rendering:

```tsx
import { useIsClient } from '@geee-be/react-utils';

function MyComponent() {
  const isClient = useIsClient();

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return <ClientOnlyComponent />;
}
```
```

---

## D. Content Guidelines

### Language and Tone
- **Clear and concise**: Focus on practical usage
- **Example-driven**: Show real-world scenarios
- **Professional**: Suitable for npm registry display
- **Scannable**: Use headers, lists, and code blocks effectively

### Code Examples
- Always include TypeScript types
- Show both basic and advanced usage
- Include error handling where relevant
- Demonstrate integration patterns
- Use realistic variable names and scenarios

### Technical Accuracy
- Verify all code examples work
- Check import paths and exports
- Ensure peer dependency versions are correct
- Test examples in isolation
- Validate TypeScript types

---

## E. Optimization for NPM

### Above the Fold Content
1. Clear package description
2. Installation command
3. Basic usage example
4. Key features list

### SEO and Discoverability
- Use relevant keywords in description
- Include framework and technology tags
- Mention use cases and benefits
- Link to related packages and documentation

### Visual Appeal
- Use consistent emoji for feature bullets
- Include badges for key metrics
- Structure with clear headers
- Use code highlighting effectively

---

## F. Maintenance Guidelines

Update READMEs when:
- New features or APIs are added
- Installation requirements change
- Peer dependencies are updated
- Usage patterns evolve
- Performance characteristics change
- Breaking changes are introduced

**Remember**: READMEs are often the first impression users have of your library. Make them clear, helpful, and professional.
