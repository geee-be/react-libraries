# @geee-be/react-twui

A comprehensive React UI component library built with Tailwind CSS v4 and Radix UI primitives. Designed for modern applications with accessibility, customization, and developer experience in mind.

[![npm version](https://badge.fury.io/js/%40geee-be%2Freact-twui.svg)](https://www.npmjs.com/package/@geee-be/react-twui)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **Modern Design System** - Built with Tailwind CSS v4 and semantic color tokens
- ♿ **Accessibility First** - WCAG compliant with proper ARIA support using Radix UI
- 🎯 **TypeScript Native** - Full type safety with comprehensive TypeScript definitions
- 🌙 **Dark Mode Ready** - Built-in dark mode support with CSS custom properties
- 📦 **Tree Shakeable** - Optimized bundle size with ES modules
- 🔧 **Highly Customizable** - Easy theming with CSS custom properties
- 📱 **Responsive** - Mobile-first design with flexible layouts
- ⚡ **Performance Focused** - Minimal re-renders and optimized components

## 📋 Installation

```bash
npm install @geee-be/react-twui
# or
pnpm add @geee-be/react-twui
# or
yarn add @geee-be/react-twui
```

### Peer Dependencies

```bash
npm install react react-dom tailwindcss
```

**Required versions:**
- React >= 18.0.0
- Tailwind CSS >= 4.0.0 (alpha)

## 🚀 Quick Start

### 1. Setup Tailwind CSS

Add to your CSS file:

```css
@import 'tailwindcss';
@import '@geee-be/react-twui/css/twui.css';
```

### 2. Basic Usage

```tsx
import { Button, Card, Input } from '@geee-be/react-twui';

function App() {
  return (
    <Card className="w-96">
      <Card.Header>
        <Card.Title>Welcome</Card.Title>
        <Card.Description>Get started with our component library</Card.Description>
      </Card.Header>
      <Card.Content className="space-y-4">
        <Input placeholder="Enter your name" />
        <Button className="w-full">Get Started</Button>
      </Card.Content>
    </Card>
  );
}
```

## 🧩 Components

### Layout & Structure
- **Card** - Flexible container with header, content, and footer
- **AspectRatio** - Maintain consistent aspect ratios
- **Separator** - Visual dividers and spacers
- **Skeleton** - Loading placeholders

### Navigation
- **Breadcrumb** - Navigation breadcrumbs
- **Pagination** - Page navigation controls
- **Sidebar** - Collapsible sidebar navigation

### Form Controls
- **Button** - Clickable actions with multiple variants
- **Input** - Text input with validation states
- **Checkbox** - Toggle selections
- **Select** - Dropdown selections
- **DatePicker** - Date selection with calendar
- **InputFile** - File upload with drag and drop
- **InputOtp** - One-time password input

### Feedback
- **Alert** - Status messages and notifications
- **Toast** - Temporary notifications
- **Tooltip** - Contextual information on hover
- **Spinner** - Loading indicators

### Overlays
- **Dialog** - Modal dialogs and confirmations
- **Drawer** - Slide-out panels
- **Popover** - Floating content containers
- **Sheet** - Side panels and overlays

### Data Display
- **Avatar** - User profile images with fallbacks
- **Calendar** - Full calendar component
- **Carousel** - Image and content carousels
- **Command** - Command palette and search

## 🎨 Theming

Customize the design system using CSS custom properties:

```css
:root {
  --primary: 220 100% 50%;
  --primary-fg: 0 0% 100%;
  --secondary: 220 20% 95%;
  --secondary-fg: 220 20% 10%;
  --background: 0 0% 100%;
  --foreground: 0 0% 5%;
  --info: 200 100% 50%;
  --warning: 45 100% 60%;
  --error: 0 100% 60%;
  --danger: 0 100% 60%;
  --input: 220 20% 95%;
  --input-fg: 220 20% 10%;
  --input-border: 220 20% 80%;
}

[data-theme='dark'] {
  --primary: 220 100% 60%;
  --primary-fg: 0 0% 100%;
  --secondary: 220 20% 15%;
  --secondary-fg: 220 20% 90%;
  --background: 0 0% 5%;
  --foreground: 0 0% 95%;
  /* ... other dark mode colors */
}
```

### Component Variants

Most components support size and variant props:

```tsx
// Button variants
<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Button sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

## 🔧 Advanced Usage

### Custom Styling

Use the `className` prop to add custom styles:

```tsx
<Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
  Gradient Button
</Button>
```

### Composition Patterns

Components are designed for easy composition:

```tsx
<Card>
  <Card.Header>
    <div className="flex items-center space-x-2">
      <Avatar>
        <Avatar.Image src="/avatar.jpg" />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
      <div>
        <Card.Title>John Doe</Card.Title>
        <Card.Description>Software Engineer</Card.Description>
      </div>
    </div>
  </Card.Header>
  <Card.Content>
    <p>Building amazing user interfaces with React and Tailwind CSS.</p>
  </Card.Content>
  <Card.Footer className="flex justify-between">
    <Button variant="outline">Follow</Button>
    <Button>Message</Button>
  </Card.Footer>
</Card>
```

### Form Integration

Works seamlessly with form libraries:

```tsx
import { useForm } from 'react-hook-form';
import { Button, Input, Label } from '@geee-be/react-twui';

function LoginForm() {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register('email', { required: true })}
        />
      </div>
      <Button type="submit">Sign In</Button>
    </form>
  );
}
```

## 🌐 SSR Compatibility

All components are server-side rendering compatible and work with:

- **Next.js** (App Router & Pages Router)
- **Remix**
- **Gatsby**
- **Vite SSR**

```tsx
// No hydration issues or client-only requirements
import { Button } from '@geee-be/react-twui';

export default function Page() {
  return <Button>Server Rendered</Button>;
}
```

## 📚 Storybook Documentation

Explore all components interactively in our [Storybook documentation](https://geee-be-react-twui.netlify.app) (link placeholder).

## 🔗 Related Packages

- **[@geee-be/react-utils](https://www.npmjs.com/package/@geee-be/react-utils)** - Companion utility hooks
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Low-level UI primitives

## 🙏 Credits

This library is built on the shoulders of giants:

- **[shadcn/ui](https://ui.shadcn.com/)** - Many components are based on or inspired by the excellent shadcn/ui component library
- **[Radix UI](https://www.radix-ui.com/)** - Provides the accessible, unstyled component primitives that power our components
- **[Tailwind CSS](https://tailwindcss.com/)** - The utility-first CSS framework that makes styling a joy

Special thanks to [@shadcn](https://github.com/shadcn) for creating an amazing foundation and to the Radix UI team for their commitment to accessibility.

## 📄 License

MIT License - see [LICENSE](../../LICENSE) file for details.

## 🐛 Issues & Support

Found a bug or need help? Please [open an issue](https://github.com/geee-be/react-libraries/issues) on GitHub.
