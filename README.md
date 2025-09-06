# @geee-be/react-libraries

A modern TypeScript monorepo containing React component libraries and utilities focused on accessibility, developer experience, and production-ready applications.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org)

## 📦 Packages

This monorepo contains the following packages:

| Package | Version | Description | Status |
|---------|---------|-------------|---------|
| [@geee-be/react-twui](./packages/@geee-be/react-twui) | ![npm](https://img.shields.io/npm/v/@geee-be/react-twui) | UI component library with Tailwind CSS v4 | ✅ Stable |
| [@geee-be/react-utils](./packages/@geee-be/react-utils) | ![npm](https://img.shields.io/npm/v/@geee-be/react-utils) | React hooks and utility functions | ✅ Stable |

### Package Features

#### 🎨 @geee-be/react-twui
- **Modern UI Components**: Built with Tailwind CSS v4 and Radix UI primitives
- **Compound Component API**: Intuitive component relationships with `Component.SubComponent` pattern (17+ compound components)
- **Accessibility First**: WCAG compliant components with proper ARIA support
- **Themeable**: CSS custom properties for easy customization
- **TypeScript**: Full type safety and IntelliSense support
- **Tree Shakeable**: Optimized for minimal bundle size
- **Backward Compatible**: Supports both compound and individual import patterns

#### 🪝 @geee-be/react-utils
- **Custom Hooks**: Enhanced state management and utility hooks
- **SSR Compatible**: Works seamlessly with Next.js and other SSR frameworks
- **Browser APIs**: Safe wrappers for modern browser features
- **Performance Focused**: Optimized for minimal re-renders
- **TypeScript**: Comprehensive type definitions

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **pnpm**: v8.0.0 or higher (recommended package manager)

### Installation

```bash
# Install a specific package
pnpm add @geee-be/react-twui
pnpm add @geee-be/react-utils

# Or install both
pnpm add @geee-be/react-twui @geee-be/react-utils
```

### Basic Usage

```tsx
// Using react-twui components with compound pattern (recommended)
import { Button, Card, Dialog, Avatar, Sidebar } from '@geee-be/react-twui';

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Welcome</Card.Title>
        <Card.Description>Modern UI component library</Card.Description>
      </Card.Header>
      <Card.Content>
        <div className="flex items-center space-x-4 mb-4">
          <Avatar>
            <Avatar.Image src="/profile.jpg" alt="Profile" />
            <Avatar.Fallback>JD</Avatar.Fallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-sm text-muted-fg">Software Engineer</p>
          </div>
        </div>

        <Dialog>
          <Dialog.Trigger asChild>
            <Button variant="outline">Get Started</Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Ready to begin?</Dialog.Title>
              <Dialog.Description>
                Choose your preferred way to explore the components.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Footer>
              <Dialog.Close asChild>
                <Button variant="outline">Browse Components</Button>
              </Dialog.Close>
              <Button>Start Building</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>
      </Card.Content>
    </Card>
  );
}

// Backward compatible usage (existing code works unchanged)
import { Card, CardHeader, CardTitle, Button } from '@geee-be/react-twui';

function LegacyApp() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Legacy Pattern</CardTitle>
      </CardHeader>
    </Card>
  );
}

// Using react-utils hooks
import { useLocalState, useIsClient } from '@geee-be/react-utils';

function MyComponent() {
  const [value, setValue] = useLocalState('key', 'default');
  const isClient = useIsClient();

  return isClient ? <div>{value}</div> : <div>Loading...</div>;
}
```

## 🛠️ Development

### Clone and Setup

```bash
# Clone the repository
git clone https://github.com/geee-be/react-libraries.git
cd react-libraries

# Install dependencies
pnpm install

# Build all packages
pnpm build
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm build` | Build all packages in parallel |
| `pnpm start:dev` | Start development mode (watch all packages) |
| `pnpm lint` | Lint all packages |
| `pnpm lint:biome:fix` | Fix linting issues with Biome |
| `pnpm changes` | Create a changeset for version bumps |

### Development Workflow

1. **Make changes** to packages in `packages/@geee-be/`
2. **Run development mode**: `pnpm start:dev`
3. **Test your changes** with the built packages
4. **Create changeset**: `pnpm changes` (for version bumps)
5. **Lint and build**: `pnpm lint && pnpm build`

## 🏗️ Architecture

### Monorepo Structure

```
react-libraries/
├── packages/@geee-be/
│   ├── react-twui/          # UI component library
│   └── react-utils/         # React hooks and utilities
├── .changeset/              # Changeset configuration
└── pnpm-workspace.yaml     # Workspace configuration
```

### Package Dependencies

- `@geee-be/react-twui` depends on `@geee-be/react-utils` (workspace dependency)
- External dependencies are managed per package
- Shared dev dependencies in root `package.json`

### Build System

- **react-twui**: Dual ESM/CJS builds using `tsup`
- **react-utils**: ESM build using TypeScript compiler
- **TypeScript**: Strict mode enabled across all packages
- **Tree Shaking**: Optimized for minimal bundle impact

### Shared Tooling

- **pnpm Workspaces**: Package management and linking
- **Biome**: Code formatting and linting
- **Changesets**: Version management and changelog generation
- **TypeScript**: Type checking and compilation
- **Storybook**: Component development and documentation

## 🎨 Styling Approach

### Tailwind CSS v4
- Modern CSS features
- CSS custom properties for theming
- Utility-first approach with semantic color tokens
- Dark mode support built-in

### Component Styling
- **Base Styles**: Reset and default styling
- **Theme Variables**: CSS custom properties in `css/theme.css`
- **Component Styles**: Package-specific styles in `css/twui.css`
- **Variant Management**: CVA (Class Variance Authority) for component variants

## 🤝 Contributing

### Development Guidelines

1. **Follow TypeScript strict mode** - All code must pass type checking
2. **Use Biome formatting** - Run `pnpm lint:biome:fix` before committing
3. **Write tests** - Add tests for new features and bug fixes
4. **Document changes** - Update relevant documentation and examples
5. **Create changesets** - Use `pnpm changes` for version bumps

### Code Standards

- **Biome**: Automatic formatting with single quotes and 2-space indentation
- **TypeScript**: Comprehensive type definitions for all exports
- **Accessibility**: Follow WCAG guidelines for components
- **Performance**: Consider bundle size and runtime performance
- **Testing**: Unit tests for utilities, visual tests for components

### Release Process

1. **Create changeset**: `pnpm changes`
2. **Version bump**: Changesets will handle semantic versioning
3. **Changelog**: Automatically generated from changesets
4. **Publishing**: Independent package versioning and publishing

### Testing Requirements

- **TypeScript**: All code must compile without errors
- **Linting**: Pass Biome linting rules
- **Build**: All packages must build successfully
- **Storybook**: Visual testing for components (react-twui)

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.

## 👨‍💻 Author

**Greg Bacchus** - [@geee-be](https://github.com/geee-be)

## 🙏 Acknowledgments

- **[shadcn/ui](https://ui.shadcn.com/)** - Inspiration and foundation for many components
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **Open Source Community** - For the amazing tools and libraries that make this possible

---

For detailed usage instructions and API documentation, see the individual package READMEs:
- [react-twui README](./packages/@geee-be/react-twui/README.md)
- [react-utils README](./packages/@geee-be/react-utils/README.md)
