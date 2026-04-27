---
description: Guidance for projects that consume @geee-be/react-twui
applyTo: "**/*.{ts,tsx,js,jsx,css,mdx}"
---

# TWUI Usage Instructions

Use this file in any app that uses @geee-be/react-twui to keep implementation patterns consistent, accessible, and maintainable.

## Required Setup

1. Install package and peers:

```bash
pnpm add @geee-be/react-twui react react-dom tailwindcss
```

2. Import styles once in app root CSS:

```css
@import 'tailwindcss';
@import '@geee-be/react-twui/css/twui.css';
```

3. If authoring local CSS that uses TWUI utilities/tokens:

```css
@reference '@geee-be/react-twui/css/twui.css';
@import 'tailwindcss';
@import '@geee-be/react-twui/css/twui.css';
@source '../../node_modules/@geee-be/react-twui/dist';
```

## Core Usage Patterns

### 1) Prefer Compound Components

Prefer namespaced composition for multi-part UI.

```tsx
import { Dialog, Button } from '@geee-be/react-twui';

export const Example = () => (
  <Dialog>
    <Dialog.Trigger asChild>
      <Button>Open</Button>
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Confirm</Dialog.Title>
        <Dialog.Description>Continue with this action?</Dialog.Description>
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
```

Notes:
- Use Component.SubComponent APIs where available.
- Backward-compatible flat exports are still valid.

### 2) Use Form Variants for Field State

Use Form-prefixed components when wiring validation and helper/error text.

Examples:
- FormInput, FormSelect, FormCheckbox
- FormCombobox, FormDatePicker
- FormInputOtp, FormInputFile, FormInputImage
- FormYearPicker, FormYearOfBirthPicker
- FormControl, FormSkeleton

### 3) Prefer asChild for Trigger Composition

For Radix-style triggers/close controls, use asChild to preserve semantics and styling of your own button/link.

### 4) Keep Accessibility Defaults Intact

- Keep required ARIA and semantic roles from base components.
- Provide labels for form controls via Label/FormControl.
- Keep keyboard navigation behavior for menu/command/dialog/popup components.

### 5) Theming and Dark Mode

- Override CSS custom properties instead of editing component internals.
- Use the dark class strategy and let TWUI dark variants handle component styling.
- Prefer semantic token usage: background, foreground, primary, secondary, paper, input, success, warning, error.

## Detailed Component Guide

This section documents each exported TWUI component with practical intent, primary APIs, and usage patterns.

### Alert

- Intent: Communicate status, warnings, and errors inline.
- Key API: Alert.
- Pattern: Place near the content it describes; keep message concise and action-oriented.
- Good use: Validation summary, API error state, onboarding info banners.

### AspectRatio

- Intent: Keep media blocks consistent across responsive layouts.
- Key API: AspectRatio.
- Pattern: Wrap image/video/embed containers to avoid layout shift.
- Good use: Cards with preview images, gallery tiles, hero media.

### Async

- Intent: Render promise-backed content declaratively.
- Key API: Async with waitFor, fallback, render, error.
- Pattern: Use stable waitFor callbacks and a lightweight fallback skeleton/spinner.
- Good use: Lightweight data fetch in isolated UI islands.

### Avatar

- Intent: Display user/org identity visuals.
- Key API: Avatar, Avatar.Image, Avatar.Fallback.
- Pattern: Always include fallback content for broken/missing images.
- Good use: User menus, comments, member lists.

### Breadcrumb

- Intent: Show hierarchical location and support quick back-navigation.
- Key API: Breadcrumb.List, Item, Link, Page, Separator, Ellipsis.
- Pattern: Last item should be Breadcrumb.Page (current location); collapse long trails with Ellipsis.
- Good use: Admin and docs sections with deep route structures.

### Button

- Intent: Trigger discrete actions.
- Key API: Button.
- Pattern: Choose variant by emphasis (primary/secondary/destructive), size by context density.
- Good use: Form submit, dialog confirmation, toolbar actions.

### Calendar

- Intent: Rich date-grid interactions or date browsing.
- Key API: Calendar exports.
- Pattern: Use standalone for scheduling views, or wire via DatePicker for form fields.
- Good use: Availability, booking, date filtering.

### Card

- Intent: Group related content/actions into a scannable container.
- Key API: Card, Card.Header, Card.Content, Card.Footer.
- Pattern: Keep semantic heading in header and actions in footer.
- Good use: Dashboard widgets, profile blocks, settings modules.

### Carousel

- Intent: Horizontal or paged browsing of repeated items.
- Key API: Carousel, Carousel.Content, Carousel.Item, Carousel.Previous, Carousel.Next, CarouselApi.
- Pattern: Use consistent item sizing and clear previous/next affordances.
- Good use: Media galleries, feature highlights, product rails.

### Checkbox and FormCheckbox

- Intent: Toggle single boolean choices.
- Key API: Checkbox, FormCheckbox.
- Pattern: Use FormCheckbox in validated forms; pair each control with clear Label text.
- Good use: Terms acceptance, settings toggles, filter options.

### Collapsible

- Intent: Progressive disclosure of secondary content.
- Key API: Collapsible, Collapsible.Trigger, Collapsible.Content.
- Pattern: Keep trigger copy explicit (for example, Show advanced settings).
- Good use: Advanced filters, optional configuration groups.

### Combobox, StaticCombobox, FormCombobox

- Intent: Searchable option picking for larger datasets.
- Key API: Combobox, StaticCombobox, FormCombobox.
- Pattern: Use StaticCombobox for known local options; use Combobox for async/filterable sources.
- Good use: User lookup, country selection, tag assignment.

### Command

- Intent: Keyboard-driven action/search palette.
- Key API: Command, Command.Dialog, Command.Input, Command.List, Command.Group, Command.Item, Command.Empty, Command.Loading.
- Pattern: Group actions by domain and include clear item labels with optional shortcuts.
- Good use: Global app command menu and fast navigation.

### Cropper

- Intent: Client-side image crop/edit interaction.
- Key API: Cropper.
- Pattern: Keep crop preview and confirm/cancel controls in the same visual scope.
- Good use: Avatar/image upload flows.

### DatePicker and FormDatePicker

- Intent: Date input with picker interaction.
- Key API: DatePicker, FormDatePicker.
- Pattern: Use FormDatePicker in forms that need error/helper messaging.
- Good use: Birth date, booking date, due dates.

### Dialog

- Intent: Modal interactions requiring focused confirmation/input.
- Key API: Dialog, Dialog.Trigger, Dialog.Content, Dialog.Header, Dialog.Title, Dialog.Description, Dialog.Footer, Dialog.Close.
- Pattern: Keep title+description concise; primary action on footer right.
- Good use: Confirm destructive action, create/edit modal forms.

### Drawer

- Intent: Edge sheet for mobile-friendly or contextual workflows.
- Key API: Drawer, Drawer.Trigger, Drawer.Content, Drawer.Header, Drawer.Title, Drawer.Description, Drawer.Footer, Drawer.Handle, Drawer.Close.
- Pattern: Prefer for mobile actions and medium-complexity task flows.
- Good use: Mobile filters, quick edit panels, contextual side interactions.

### DropdownMenu

- Intent: Compact contextual action sets.
- Key API: DropdownMenu.Trigger, Content, Item, Group, Label, Separator, CheckboxItem, RadioGroup, RadioItem, Sub, SubTrigger, SubContent, Shortcut.
- Pattern: Keep items short, group related actions, and separate destructive actions.
- Good use: Row action menus, toolbar overflow menus.

### FormControl

- Intent: Shared field shell for label/helper/error layout.
- Key API: FormControl.
- Pattern: Use to normalize spacing and validation state visuals across form elements.
- Good use: Mixed input forms with consistent UX.

### Input and FormInput

- Intent: Text-like data entry.
- Key API: Input, FormInput.
- Pattern: Use Input for unvalidated/simple usage; FormInput for validated form wiring.
- Good use: Name/email/search/code fields.

### InputFile and InputImage Family

- Intent: File and image upload with reusable form variants.
- Key API: InputFile, InputImage, FormInputFile, FormInputImage, InputImageUtils, ImageBinary, ImageSpec.
- Pattern: Use image variants when you need preview/crop flows; keep file restrictions visible in helper text.
- Good use: Attachments, profile images, media uploads.

### InputOtp and FormInputOtp

- Intent: One-time passcode entry with slot-based UI.
- Key API: InputOtp, InputOtp.Group, InputOtp.Slot, InputOtp.Separator, FormInputOtp.
- Pattern: Keep fixed length and auto-focus behavior predictable.
- Good use: MFA verification and password reset confirmation.

### Join

- Intent: Visually join adjacent controls/components.
- Key API: Join.
- Pattern: Use for grouped controls where borders should read as one unit.
- Good use: Input+button combos, segmented control clusters.

### Label and Label.Helper

- Intent: Accessible labeling and helper/error text.
- Key API: Label, Label.Helper.
- Pattern: Always connect with htmlFor/id for form fields.
- Good use: All form controls, required indicator and hint text.

### Pagination

- Intent: Page-level navigation for large lists/tables.
- Key API: Pagination, Pagination.Content, Pagination.Item, Pagination.Link, Pagination.Previous, Pagination.Next, Pagination.Ellipsis.
- Pattern: Mark active page with isActive and retain previous/next affordances.
- Good use: Search results, admin tables, logs.

### Popover

- Intent: Anchored floating container for compact interaction.
- Key API: Popover, Popover.Trigger, Popover.Content, Popover.Arrow, Popover.Close.
- Pattern: Keep short-lived interactions inside popovers; escalate complex forms to Dialog/Drawer.
- Good use: Quick settings, inline help cards, compact editors.

### ScrollArea

- Intent: Customizable scroll containers.
- Key API: ScrollArea, ScrollArea.Bar.
- Pattern: Set explicit height/width to make overflow behavior intentional.
- Good use: Chat panes, long menus, constrained side panels.

### Select and FormSelect

- Intent: Option selection where free text is not needed.
- Key API: Select, FormSelect.
- Pattern: Use Select for simple pickers; FormSelect for validated forms and helper/error messaging.
- Good use: Status, role, priority, fixed taxonomies.

### Separator

- Intent: Lightweight visual section break.
- Key API: Separator.
- Pattern: Use to improve scanability, not as spacing replacement.
- Good use: Menus, cards, toolbars, panel sections.

### Sheet

- Intent: Side or edge panel with dialog-like semantics.
- Key API: Sheet, Sheet.Trigger, Sheet.Content, Sheet.Header, Sheet.Title, Sheet.Description, Sheet.Footer, Sheet.Close.
- Pattern: Use for supporting workflows where main page context should remain visible.
- Good use: Preferences panel, context inspector, secondary navigation.

### ShortcutKey

- Intent: Render keyboard shortcut hints consistently.
- Key API: ShortcutKey.
- Pattern: Pair with action labels in menus/tooltips/command items.
- Good use: Power-user features and discoverability.

### Sidebar and useSidebar

- Intent: Application shell navigation and collapsible side structures.
- Key API: Sidebar.Provider, Sidebar, Sidebar.Trigger, Sidebar.Rail, Sidebar.Inset, Sidebar.Header, Sidebar.Content, Sidebar.Footer, Sidebar.Separator, Sidebar.Input, Sidebar.Group, Sidebar.GroupLabel, Sidebar.GroupAction, Sidebar.GroupContent, Sidebar.Menu, Sidebar.MenuItem, Sidebar.MenuButton, Sidebar.MenuAction, Sidebar.MenuBadge, Sidebar.MenuSkeleton, Sidebar.MenuSub, Sidebar.MenuSubItem, Sidebar.MenuSubButton, useSidebar.
- Pattern: Wrap shell with Sidebar.Provider and use Sidebar.Inset for main content area.
- Good use: Complex products with persistent multi-level navigation.

### Skeleton and FormSkeleton

- Intent: Loading placeholders that preserve layout stability.
- Key API: Skeleton, FormSkeleton.
- Pattern: Match placeholder dimensions to eventual content to reduce shift.
- Good use: Initial page load and incremental section loading.

### Spinner

- Intent: Small loading state for actions and async work.
- Key API: Spinner.
- Pattern: Prefer inline spinner for button/action states; combine with text for longer operations.
- Good use: Submit buttons, refresh actions.

### Toast and Toaster

- Intent: Non-blocking notifications.
- Key API: Toaster, toast, ToastType, ToastOptions.
- Pattern: Mount a single Toaster in app shell and fire toast calls from interaction handlers.
- Good use: Save success, background sync status, transient errors.

### Tooltip

- Intent: Contextual explanation on hover/focus.
- Key API: Tooltip.Provider, Tooltip, Tooltip.Trigger, Tooltip.Content, Tooltip.Arrow.
- Pattern: Keep copy short and supplemental; never hide required instructions only in tooltip.
- Good use: Icon-only buttons and dense data UIs.

### WithIcon

- Intent: Text+icon composition with controlled alignment and truncation.
- Key API: WithIcon with iconBefore, iconAfter, ellipsis.
- Pattern: Use ellipsis mode in narrow containers to preserve visual alignment.
- Good use: Menu labels, list rows, status text with iconography.

### YearPicker Family

- Intent: Year-only selection and year-of-birth flows.
- Key API: YearPicker, YearOfBirthPicker, FormYearPicker, FormYearOfBirthPicker.
- Pattern: Prefer year-specific pickers over free-text year inputs.
- Good use: DOB forms, graduation year, reporting filters.

### Icons and Composition Utilities

- Intent: Shared primitives for consistency and custom composition.
- Key API: Slot, CloseIcon, InfoIcon, RequiredIcon, TippyIcon.
- Pattern: Use Slot for polymorphic wrappers and official icon exports for visual consistency.

### Base Helpers Exported by Package Root

- Intent: Reuse TWUI utility/style helpers when building wrappers around TWUI components.
- Key API: helpers/style exports, helpers/utils exports.
- Pattern: Prefer package-level helper imports over duplicating style utility logic.

## Compound APIs Available

Use these namespaced APIs when composing complex components:

- Avatar: Root, Image, Fallback
- Breadcrumb: Root, List, Item, Link, Page, Separator, Ellipsis
- Card: Root, Header, Content, Footer
- Carousel: Root, Content, Item, Previous, Next
- Collapsible: Root, Trigger, Content
- Command: Root, Dialog, Input, List, Group, Item, Separator, Empty, Loading
- Dialog: Root, Trigger, Portal, Overlay, Content, Header, Title, Description, Footer, Close
- Drawer: Root, Trigger, Portal, Overlay, Content, Header, Title, Description, Footer, Handle, Close
- DropdownMenu: Root, Trigger, Portal, Content, Group, Label, Item, CheckboxItem, RadioGroup, RadioItem, Separator, Shortcut, Sub, SubTrigger, SubContent
- InputOtp: Group, Slot, Separator
- Label: Root, Helper
- Pagination: Content, Item, Link, Previous, Next, Ellipsis
- Popover: Root, Trigger, Content, Arrow, Close
- ScrollArea: Root, Bar
- Sheet: Root, Trigger, Portal, Overlay, Content, Header, Title, Description, Footer, Close
- Sidebar: Provider, Trigger, Rail, Inset, Header, Content, Footer, Separator, Input, Group, GroupLabel, GroupAction, GroupContent, Menu, MenuItem, MenuButton, MenuAction, MenuBadge, MenuSkeleton, MenuSub, MenuSubItem, MenuSubButton
- Tooltip: Root, Provider, Trigger, Portal, Content, Arrow

## Recommended Project Conventions

1. Import from @geee-be/react-twui at component call sites, not deep paths.
2. Prefer compound APIs for readability and editor discoverability.
3. Use Form* variants for validated fields and mixed helper/error states.
4. Keep one Toaster mounted in app shell.
5. Keep theme customization in CSS tokens, not per-component hard overrides.
6. Keep wrappers thin: compose TWUI primitives before creating custom replacements.

## Anti-Patterns to Avoid

- Do not bypass compound structure with custom div wrappers that break keyboard/focus flow.
- Do not duplicate validation chrome if a Form* component already provides it.
- Do not style against unstable internals; prefer className and token-based theming.
- Do not mount multiple toast containers unless intentionally scoped.

## Minimal Starter Example

```tsx
import {
  Button,
  Card,
  Dialog,
  FormInput,
  Label,
  Toaster,
} from '@geee-be/react-twui';

export const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Card className="max-w-md">
        <Card.Header>
          <h2>Profile</h2>
        </Card.Header>
        <Card.Content className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <FormInput id="name" name="name" placeholder="Ada" />
          </div>
          <Dialog>
            <Dialog.Trigger asChild>
              <Button>Save</Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Confirm save</Dialog.Title>
              </Dialog.Header>
              <Dialog.Footer>
                <Dialog.Close asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.Close>
                <Button>Confirm</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog>
        </Card.Content>
      </Card>
    </>
  );
};
```
