# @geee-be/react-twui

A comprehensive React UI component library built with Tailwind CSS v4 and Radix UI primitives. Designed for modern applications with accessibility, customization, and developer experience in mind.

[![npm version](https://badge.fury.io/js/%40geee-be%2Freact-twui.svg)](https://www.npmjs.com/package/@geee-be/react-twui)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **Modern Design System** - Built with Tailwind CSS v4 and semantic color tokens
- ♿ **Accessibility First** - WCAG compliant with proper ARIA support using Radix UI
- 🎯 **TypeScript Native** - Full type safety with comprehensive TypeScript definitions
- 🌙 **Dark Mode Ready** - Built-in dark mode support
- 📦 **Tree Shakeable** - Optimized bundle size with ES modules and modern tooling
- 🔧 **Highly Customizable** - Easy theming with CSS custom properties
- 📱 **Responsive** - Mobile-first design with flexible layouts
- ⚡ **Performance Focused** - Minimal re-renders and optimized components
- 🔨 **Tailwind CSS v4 Ready** - Fully compatible with the latest Tailwind CSS v4 features
- 🧩 **Compound Components** - Intuitive API with compound export pattern

## 🆕 Recent Improvements (v2.0+)

- **Compound Export Pattern** - New intuitive API using compound components (e.g., `Dialog.Trigger`, `Card.Header`)
- **Enhanced Developer Experience** - Better IntelliSense and auto-completion with compound components
- **Backward Compatibility** - All existing imports continue to work alongside new compound pattern
- **Tailwind CSS v4 Compatibility** - Fully updated for Tailwind CSS v4 with proper `@theme` and `@variant` usage
- **Enhanced Dark Mode** - Improved dark mode implementation using `@variant dark` directive
- **Enhanced Build Process** - Modern ESM-first build process with optimized tree shaking and bundling
- **Improved Type Safety** - Enhanced TypeScript definitions and better component prop typing

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
- Tailwind CSS >= 4.1.0 (this library is built for Tailwind CSS v4)

## 🚀 Quick Start

### 1. Setup Tailwind CSS

Add to your CSS file:

```css
@import 'tailwindcss';
@import '@geee-be/react-twui/css/twui.css';
```

Or if you need to reference Tailwind utilities in your own CSS modules:

```css
@reference '@geee-be/react-twui/css/twui.css';
@import 'tailwindcss';
@import '@geee-be/react-twui/css/twui.css';

@source '../../node_modules/@geee-be/react-twui/dist';

/* Your custom styles can now use Tailwind utilities */
.my-component {
  @apply rounded-lg bg-primary text-primary-fg;
}
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

## 🧩 Compound Component Pattern

This library features an intuitive compound component API that makes complex components easier to use and understand. Instead of importing many individual components, you can access sub-components through the main component.

### Modern Compound API (Recommended)

```tsx
import { Dialog, Button } from '@geee-be/react-twui';

function MyDialog() {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Confirm Action</Dialog.Title>
          <Dialog.Description>
            Are you sure you want to continue?
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="outline">Cancel</Button>
          </Dialog.Close>
          <Button>Continue</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
}
```

### Benefits of Compound Components

- **🎯 Intuitive API**: Clear relationship between components with `Component.SubComponent`
- **🧠 Better IntelliSense**: IDE auto-suggests available sub-components
- **📦 Cleaner Imports**: Import one component instead of many individual ones
- **🔗 Clear Hierarchy**: Visual connection between related components
- **🛡️ Namespace Protection**: Reduces naming conflicts

### Components with Compound API

The following components support the compound pattern:

- **Dialog**: `Dialog.Trigger`, `Dialog.Content`, `Dialog.Header`, `Dialog.Title`, `Dialog.Description`, `Dialog.Footer`, `Dialog.Close`
- **Sheet**: `Sheet.Trigger`, `Sheet.Content`, `Sheet.Header`, `Sheet.Title`, `Sheet.Description`, `Sheet.Footer`, `Sheet.Close`
- **Drawer**: `Drawer.Trigger`, `Drawer.Content`, `Drawer.Header`, `Drawer.Title`, `Drawer.Description`, `Drawer.Footer`, `Drawer.Close`, `Drawer.Handle`
- **DropdownMenu**: `DropdownMenu.Trigger`, `DropdownMenu.Content`, `DropdownMenu.Item`, `DropdownMenu.Group`, `DropdownMenu.Label`, `DropdownMenu.Separator`, etc.
- **Card**: `Card.Header`, `Card.Content`, `Card.Footer`
- **Carousel**: `Carousel.Content`, `Carousel.Item`, `Carousel.Previous`, `Carousel.Next`
- **Breadcrumb**: `Breadcrumb.List`, `Breadcrumb.Item`, `Breadcrumb.Link`, `Breadcrumb.Page`, `Breadcrumb.Separator`, `Breadcrumb.Ellipsis`
- **Pagination**: `Pagination.Content`, `Pagination.Item`, `Pagination.Link`, `Pagination.Previous`, `Pagination.Next`, `Pagination.Ellipsis`
- **Popover**: `Popover.Trigger`, `Popover.Content`, `Popover.Arrow`, `Popover.Close`
- **Tooltip**: `Tooltip.Content`
- **ScrollArea**: `ScrollArea.Bar`
- **Collapsible**: `Collapsible.Trigger`, `Collapsible.Content`
- **Command**: `Command.Input`, `Command.List`, `Command.Group`, `Command.Item`, `Command.Separator`, `Command.Empty`, `Command.Loading`

## 🧩 Components

### Layout & Structure
- **Card** - Flexible container with header, content, and footer
- **AspectRatio** - Maintain consistent aspect ratios
- **Separator** - Visual dividers and spacers
- **Skeleton** - Loading placeholders
- **Join** - Component for joining elements with visual separators
- **ScrollArea** - Custom scrollable areas with styled scroll bars

### Navigation
- **Breadcrumb** - Navigation breadcrumbs
- **Pagination** - Page navigation controls
- **Sidebar** - Collapsible sidebar navigation
- **DropdownMenu** - Context menus and dropdown navigation
- **Command** - Command palette and search interface

### Form Controls
- **Button** - Clickable actions with multiple variants
- **Input** - Text input with validation states
- **Checkbox** - Toggle selections
- **Select** - Dropdown selections
- **Combobox** - Searchable select with autocomplete
- **DatePicker** - Date selection with calendar
- **YearPicker** - Year selection component
- **InputFile** - File upload with drag and drop
- **InputOtp** - One-time password input
- **Label** - Form labels with helper text
- **FormControl** - Form field wrapper with validation support

### Feedback
- **Alert** - Status messages and notifications
- **Toast** - Temporary notifications (powered by react-toastify)
- **Tooltip** - Contextual information on hover
- **Spinner** - Loading indicators

### Overlays
- **Dialog** - Modal dialogs and confirmations
- **Drawer** - Slide-out panels
- **Popover** - Floating content containers
- **Sheet** - Side panels and overlays
- **Collapsible** - Expandable and collapsible content containers

### Data Display
- **Avatar** - User profile images with fallbacks
- **Calendar** - Full calendar component
- **Carousel** - Image and content carousels
- **Cropper** - Image cropping and editing

### Utilities
- **ShortcutKey** - Display keyboard shortcuts
- **WithIcon** - Icon wrapper utilities
- **Async** - Async content loading states

## 🎨 Theming

The component library uses a modern theming system built on CSS custom properties with separate light and dark variants.

### Basic Theme Structure

```css
@theme {
  /* Light mode colors (default) */
  --color-background: hsl(0 0% 92%);
  --color-foreground: hsl(0 0% 10%);

  /* Primary color */
  --color-primary: #ec740c;
  --color-primary-fg: oklch(from var(--color-primary) calc(clamp(-0.5, ((0.7 - l) * 1000), 0.5) + 0.5) 0 h);
  --color-primary-muted: oklch(from var(--color-primary) l c h / 0.05);

  /* Secondary color */
  --color-secondary: #5722ff;
  --color-secondary-fg: oklch(from var(--color-secondary) calc(clamp(-0.5, ((0.7 - l) * 1000), 0.5) + 0.5) 0 h);

  /* Status colors */
  --color-info: #1485ff;
  --color-warning: #ffc233;
  --color-success: #6fd626;
  --color-error: #f40909;
  --color-danger: #f40909;

  /* Input controls */
  --color-input: hsl(0 0% 98%);
  --color-input-fg: hsl(0 0% 10%);
  --color-input-border: hsl(0 0% 50%);

  /* Paper/Card surfaces */
  --color-paper: hsl(255, 0%, 97%);
  --color-paper-fg: hsl(255 0% 20%);
}

@variant dark {
  @theme {
    /* Dark mode color overrides */
    --color-background: hsl(0 0% 10%);
    --color-foreground: hsl(0 0% 92%);

    /* Input controls */
    --color-input: hsl(0 0% 15%);
    --color-input-fg: hsl(0 0% 92%);
    --color-input-border: hsl(0 0% 70%);

    /* Paper/Card surfaces */
    --color-paper: hsl(255, 0%, 15%);
    --color-paper-fg: hsl(255 0% 87.5%);

    /* Status color variants for dark mode */
    --color-info: #0a71df;
    --color-warning: #e7a60c;
    --color-success: #55a919;

    /* Muted colors have higher opacity in dark mode */
    --color-primary-muted: oklch(from var(--color-primary) l c h / 0.15);
    --color-secondary-muted: oklch(from var(--color-secondary) l c h / 0.15);
  }
}
```

### Dark Mode Implementation

Dark mode is implemented using the `@variant dark` directive in Tailwind CSS v4. To enable dark mode in your application:

1. **Class-based dark mode** (recommended):
```tsx
// Toggle dark mode by adding/removing 'dark' class
document.documentElement.classList.toggle('dark');

// Or use a state management solution
function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

2. **System preference based**:
```css
/* Configure in your tailwind.config.js */
module.exports = {
  darkMode: 'class', // or 'media' for system preference
  // ... rest of config
}
```

### Custom Color Schemes

You can override any color in your CSS:

```css
@theme {
  /* Override primary color */
  --color-primary: #10b981;

  /* Custom brand colors */
  --color-brand: #6366f1;
  --color-brand-fg: white;
  --color-brand-muted: oklch(from var(--color-brand) l c h / 0.05);
}

@variant dark {
  @theme {
    --color-brand-muted: oklch(from var(--color-brand) l c h / 0.15);
  }
}
```

## 🎨 CSS Architecture

### File Structure
The CSS is organized into several files for modularity:

- **`twui.css`** - Main entry point that imports all other styles
- **`theme.css`** - Color system and design tokens
- **`reset.css`** - CSS resets and base styles
- **`calculations.css`** - Computed values and utility classes
- **`default.css`** - Default color scheme utilities
- **`like.css`** - Additional utility classes

### Troubleshooting CSS Issues

If you encounter build errors about unknown utility classes:

1. **Ensure proper imports**: Make sure you're importing `@geee-be/react-twui/css/twui.css`
2. **Check Tailwind config**: Verify your project is using Tailwind CSS v4.1+
3. **CSS Module references**: If using `@apply` in your own CSS files, add `@reference` directive:

```css
@reference '@geee-be/react-twui/css/twui.css';

.my-style {
  @apply rounded-lg bg-primary;
}
```

4. **Build configuration**: Ensure your build tool processes CSS imports correctly

### Component Variants

Most components support size and variant props:

```tsx
// Button variants
<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="input">Input</Button>
<Button variant="card">Card</Button>
<Button variant="link">Link</Button>

// Button sizes
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>

// Button shapes
<Button shape="rounded">Rounded</Button>
<Button shape="pill">Pill</Button>
<Button shape="icon">
  <IconComponent />
</Button>

// Button colors
<Button color="default">Default</Button>
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="gray">Gray</Button>
<Button color="info">Info</Button>
<Button color="warning">Warning</Button>
<Button color="success">Success</Button>
<Button color="error">Error</Button>
<Button color="danger">Danger</Button>

// Combining variants
<Button variant="outline" color="primary" shape="pill" size="sm">
  Pill Primary Outline
</Button>
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

Works seamlessly with form libraries like React Hook Form. Use the dedicated Form* components for integrated validation and error handling:

```tsx
import { useForm } from 'react-hook-form';
import {
  Button,
  FormInput,
  FormSelect,
  FormCheckbox,
  FormDatePicker
} from '@geee-be/react-twui';

function ProfileForm() {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormInput
        control={control}
        name="email"
        label="Email Address"
        placeholder="Enter your email"
        required="Email is required"
      />

      <FormSelect
        control={control}
        name="country"
        label="Country"
        placeholder="Select your country"
        items={[
          {
            key: 'countries',
            label: 'Countries',
            items: [
              { key: 'us', label: 'United States' },
              { key: 'ca', label: 'Canada' },
              { key: 'uk', label: 'United Kingdom' },
            ],
          },
        ]}
      />

      <FormDatePicker
        control={control}
        name="birthDate"
        label="Date of Birth"
      />

      <FormCheckbox
        control={control}
        name="newsletter"
        label="Subscribe to newsletter"
        description="Get updates about new features and releases"
      />

      <Button type="submit">Save Profile</Button>
    </form>
  );
}

// For manual form handling without React Hook Form
import { Input, Label } from '@geee-be/react-twui';

function SimpleForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <Button type="submit">Submit</Button>
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

Explore all components interactively in our Storybook documentation. Run locally with:

```bash
cd packages/@geee-be/react-twui
pnpm storybook
```

This will start Storybook on `http://localhost:6006` where you can:
- View all components with live examples
- Test different props and variants
- See component documentation
- Interact with components in isolation

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
