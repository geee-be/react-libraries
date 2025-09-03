# @geee-be/react-utils

A collection of powerful, type-safe React hooks and utility functions designed to enhance modern React applications. Built with TypeScript, SSR compatibility, and performance in mind.

[![npm version](https://badge.fury.io/js/%40geee-be%2Freact-utils.svg)](https://www.npmjs.com/package/@geee-be/react-utils)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🪝 **Custom React Hooks** - Enhanced state management and utility hooks
- 🔒 **Type Safe** - Full TypeScript support with comprehensive type definitions
- 🌐 **SSR Compatible** - Works seamlessly with Next.js and other SSR frameworks
- ⚡ **Performance Focused** - Optimized for minimal re-renders and memory usage
- 🧩 **Modular** - Tree-shakeable exports for optimal bundle size
- 🔧 **Browser API Wrappers** - Safe abstractions for modern browser features
- 📱 **Device Detection** - Responsive utilities for different environments
- 🔄 **State Persistence** - Local storage integration with sync capabilities

## 📋 Installation

```bash
npm install @geee-be/react-utils
# or
pnpm add @geee-be/react-utils
# or
yarn add @geee-be/react-utils
```

### Peer Dependencies

```bash
npm install react react-dom
```

**Required versions:**
- React >= 18.0.0

## 🚀 Quick Start

```tsx
import { useLocalState, useIsClient, useIsMobile } from '@geee-be/react-utils';

function MyComponent() {
  const [theme, setTheme] = useLocalState('theme', 'light');
  const isClient = useIsClient();
  const isMobile = useIsMobile();

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`theme-${theme} ${isMobile ? 'mobile' : 'desktop'}`}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

## 🪝 Hooks Overview

### State Management

#### `useLocalState`
Enhanced `useState` with localStorage persistence and cross-tab synchronization.

```tsx
import { useLocalState } from '@geee-be/react-utils';

function Settings() {
  const [settings, setSettings] = useLocalState('user-settings', {
    theme: 'light',
    language: 'en'
  });

  return (
    <div>
      <button onClick={() => setSettings(prev => ({ ...prev, theme: 'dark' }))}>
        Enable Dark Mode
      </button>
    </div>
  );
}
```

**Features:**
- Automatic localStorage synchronization
- Cross-tab state updates
- SSR-safe initialization
- Type-safe with TypeScript inference

#### `useHistoryState`
State management with browser history integration for navigation state persistence.

```tsx
import { useHistoryState } from '@geee-be/react-utils';

function SearchPage() {
  const [query, setQuery] = useHistoryState('search', '');

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

### Environment Detection

#### `useIsClient`
Detect client-side rendering vs server-side rendering to prevent hydration mismatches.

```tsx
import { useIsClient } from '@geee-be/react-utils';

function ClientOnlyFeature() {
  const isClient = useIsClient();

  if (!isClient) {
    return <div>Loading...</div>; // Server-side fallback
  }

  return <ExpensiveClientComponent />;
}
```

#### `useIsMobile`
Responsive device detection with customizable breakpoints.

```tsx
import { useIsMobile } from '@geee-be/react-utils';

function ResponsiveNav() {
  const isMobile = useIsMobile(768); // Custom breakpoint

  return isMobile ? <MobileNav /> : <DesktopNav />;
}
```

### Communication

#### `useBroadcastChannel`
Cross-tab/window communication using the Broadcast Channel API with fallback.

```tsx
import { useBroadcastChannel } from '@geee-be/react-utils';

function ChatApp() {
  const [message, postMessage] = useBroadcastChannel('chat-channel');

  useEffect(() => {
    if (message) {
      console.log('Received message:', message);
      // Handle incoming message from other tabs
    }
  }, [message]);

  const sendMessage = () => {
    postMessage({ text: 'Hello from another tab!', timestamp: Date.now() });
  };

  return <button onClick={sendMessage}>Send Message</button>;
}
```

## 🛠️ Utility Functions

### Component Helpers

#### `ClientOnly`
Wrapper component for client-side only rendering.

```tsx
import { ClientOnly } from '@geee-be/react-utils';

function App() {
  return (
    <div>
      <h1>Server and Client Rendered</h1>
      <ClientOnly>
        <ExpensiveClientComponent />
      </ClientOnly>
    </div>
  );
}
```

#### `SubComponent`
Utilities for component composition patterns.

```tsx
import { SubComponent } from '@geee-be/react-utils';

// Create compound components easily
const Card = SubComponent.create('Card', {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter
});
```

### Effects and Interactions

#### `ripple`
Material Design ripple effect implementation.

```tsx
import { ripple } from '@geee-be/react-utils';

function RippleButton() {
  const handleClick = (event) => {
    ripple(event.currentTarget, { duration: 600, color: 'rgba(255,255,255,0.5)' });
  };

  return (
    <button onClick={handleClick} className="relative overflow-hidden">
      Click for Ripple Effect
    </button>
  );
}
```

## 🌐 SSR Compatibility

All hooks and utilities are designed to work seamlessly with server-side rendering:

### Next.js Integration

```tsx
// pages/_app.tsx or app/layout.tsx
import { useIsClient } from '@geee-be/react-utils';

function MyApp({ Component, pageProps }) {
  const isClient = useIsClient();

  return (
    <div>
      <Component {...pageProps} />
      {isClient && <ClientOnlyAnalytics />}
    </div>
  );
}
```

### Hydration Safety

```tsx
import { useLocalState, useIsClient } from '@geee-be/react-utils';

function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalState('theme', 'light');
  const isClient = useIsClient();

  // Prevents hydration mismatch
  const currentTheme = isClient ? theme : 'light';

  return (
    <div data-theme={currentTheme}>
      {children}
    </div>
  );
}
```

## 🎯 Performance Considerations

### Optimized Re-renders
Hooks use React's built-in optimization patterns:

```tsx
// useLocalState only re-renders when the actual value changes
const [count, setCount] = useLocalState('count', 0);

// Callbacks are memoized automatically
const increment = useCallback(() => setCount(c => c + 1), [setCount]);
```

### Memory Management
Automatic cleanup prevents memory leaks:

```tsx
// Broadcast channels are automatically cleaned up on unmount
const [message, postMessage] = useBroadcastChannel('channel');

// Event listeners are properly removed
const isMobile = useIsMobile();
```

## 📱 Framework Integration

### Next.js
```tsx
// Full SSR support with App Router
import { useLocalState } from '@geee-be/react-utils';

export default function Page() {
  const [data, setData] = useLocalState('page-data', null);
  return <div>{data?.title}</div>;
}
```

### Remix
```tsx
import { useIsClient } from '@geee-be/react-utils';

export default function RemixRoute() {
  const isClient = useIsClient();
  return isClient ? <ClientFeature /> : <ServerFallback />;
}
```

### Vite/SPA
```tsx
// Works great in client-side apps too
import { useHistoryState } from '@geee-be/react-utils';

function SinglePageApp() {
  const [route, setRoute] = useHistoryState('route', '/');
  return <Router currentRoute={route} />;
}
```

## 🔧 TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import { useLocalState } from '@geee-be/react-utils';

interface UserPreferences {
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
}

function UserSettings() {
  // Type is automatically inferred as [UserPreferences, (value: UserPreferences) => void]
  const [prefs, setPrefs] = useLocalState<UserPreferences>('user-prefs', {
    theme: 'light',
    language: 'en',
    notifications: true
  });

  // TypeScript will ensure type safety
  const toggleTheme = () => {
    setPrefs(prev => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light'
    }));
  };

  return <button onClick={toggleTheme}>Toggle Theme</button>;
}
```

## 🔗 Related Packages

- **[@geee-be/react-twui](https://www.npmjs.com/package/@geee-be/react-twui)** - UI component library that uses these utilities
- **[@uidotdev/usehooks](https://usehooks.com/)** - Additional React hooks (included as dependency)

## 📄 License

MIT License - see [LICENSE](../../LICENSE) file for details.

## 🐛 Issues & Support

Found a bug or need help? Please [open an issue](https://github.com/geee-be/react-libraries/issues) on GitHub.
