# Compound Component Conversion Prompt

## Overview
This prompt helps convert existing components with multiple related sub-components to use the compound component export pattern, following the established pattern used by the Card component.

## When to Use This Pattern
Convert components to the compound pattern when:
- A component has multiple related sub-components that are commonly used together
- Sub-components have semantic relationships (e.g., Header, Content, Footer, Trigger, etc.)
- You want to provide both compound usage (`Component.SubComponent`) and individual access
- The component follows a clear hierarchical structure

## Target Components for Conversion
Based on the current codebase, these components are good candidates for conversion:

### High Priority
- **Dialog** - Has Trigger, Content, Header, Footer, Title, Description, etc.
- **Breadcrumb** - Has List, Item, Link, Separator, Page, Ellipsis
- **Sheet** - Has Trigger, Content, Header, Footer, Title, Description
- **Drawer** - Has Trigger, Content, Header, Footer, Title, Description

### Medium Priority
- **Alert** - Could benefit from Alert.Title and Alert.Description pattern
- **Popover** - Has Trigger, Content, etc.
- **DropdownMenu** - Has multiple sub-components
- **Tooltip** - Has Trigger, Content

### Lower Priority
- **Command** - Has multiple parts but less commonly used as compound
- **Combobox** - Mainly single component with internal parts

## Conversion Process

### Step 1: Analyze Current Structure
1. Identify the main component and all related sub-components
2. Check current export pattern in the component's `index.ts`
3. Identify logical groupings and naming conventions
4. Ensure all sub-components are properly exported

### Step 2: Apply Compound Pattern
Follow this template for the `index.ts` file with dual export pattern:

```typescript
// Export types for the main component
export type { [MainComponent]Props } from './[MainComponent].js';

// Import all components
import { [MainComponent] as [MainComponent]Component } from './[MainComponent].js';
import { [SubComponent1] as [SubComponent1]Component } from './[SubComponent1]';
import { [SubComponent2] as [SubComponent2]Component } from './[SubComponent2]';
// ... import all sub-components

// Define compound type
type [MainComponent]Compound = typeof [MainComponent]Component & {
  [SubName1]: typeof [SubComponent1]Component;
  [SubName2]: typeof [SubComponent2]Component;
  // ... add all sub-components
};

// Create compound component
export const [MainComponent]: [MainComponent]Compound = Object.assign([MainComponent]Component, {
  [SubName1]: [SubComponent1]Component,
  [SubName2]: [SubComponent2]Component,
  // ... assign all sub-components
});

// Export original form components for backward compatibility and flexibility
export {
  [SubComponent1]Component as [MainComponent][SubName1],
  [SubComponent2]Component as [MainComponent][SubName2],
  // ... export all sub-components in original form
};
```

This dual export pattern provides:
- **Compound usage**: `Component.SubComponent` (recommended for new code)
- **Original form**: `ComponentSubComponent` (backward compatibility)
- **Maximum flexibility**: Both patterns supported simultaneously

### Step 3: Update Documentation
1. Update usage examples in README and Storybook
2. Update component documentation to show compound usage
3. Add migration guide for existing users
4. Update TypeScript examples

### Step 4: Verify Functionality
1. Test compound usage: `Component.SubComponent`
2. Test individual imports: `import { SubComponent } from 'library'`
3. Verify TypeScript types are properly exported
4. Test with existing code to ensure backward compatibility

## Example Conversion: Dialog Component

### Before (Current Pattern)
```typescript
// Dialog/index.ts
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from './Dialog.js';
```

### After (Compound Pattern with Dual Exports)
```typescript
// Dialog/index.ts
export type { DialogProps } from './Dialog.js';

import { Dialog as DialogComponent } from './Dialog.js';
import { DialogClose as DialogCloseComponent } from './DialogClose';
import { DialogContent as DialogContentComponent } from './DialogContent';
import { DialogDescription as DialogDescriptionComponent } from './DialogDescription';
import { DialogFooter as DialogFooterComponent } from './DialogFooter';
import { DialogHeader as DialogHeaderComponent } from './DialogHeader';
import { DialogOverlay as DialogOverlayComponent } from './DialogOverlay';
import { DialogPortal as DialogPortalComponent } from './DialogPortal';
import { DialogTitle as DialogTitleComponent } from './DialogTitle';
import { DialogTrigger as DialogTriggerComponent } from './DialogTrigger';

type DialogCompound = typeof DialogComponent & {
  Close: typeof DialogCloseComponent;
  Content: typeof DialogContentComponent;
  Description: typeof DialogDescriptionComponent;
  Footer: typeof DialogFooterComponent;
  Header: typeof DialogHeaderComponent;
  Overlay: typeof DialogOverlayComponent;
  Portal: typeof DialogPortalComponent;
  Title: typeof DialogTitleComponent;
  Trigger: typeof DialogTriggerComponent;
};

export const Dialog: DialogCompound = Object.assign(DialogComponent, {
  Close: DialogCloseComponent,
  Content: DialogContentComponent,
  Description: DialogDescriptionComponent,
  Footer: DialogFooterComponent,
  Header: DialogHeaderComponent,
  Overlay: DialogOverlayComponent,
  Portal: DialogPortalComponent,
  Title: DialogTitleComponent,
  Trigger: DialogTriggerComponent,
});

// Export original form components for backward compatibility and flexibility
export {
  DialogCloseComponent as DialogClose,
  DialogContentComponent as DialogContent,
  DialogDescriptionComponent as DialogDescription,
  DialogFooterComponent as DialogFooter,
  DialogHeaderComponent as DialogHeader,
  DialogOverlayComponent as DialogOverlay,
  DialogPortalComponent as DialogPortal,
  DialogTitleComponent as DialogTitle,
  DialogTriggerComponent as DialogTrigger,
};
```

### Usage Examples After Conversion
```typescript
// 1. Compound usage (recommended for new code)
import { Dialog, Button } from '@geee-be/react-twui';

<Dialog>
  <Dialog.Trigger asChild>
    <Button>Open Dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Dialog Title</Dialog.Title>
      <Dialog.Description>Dialog description</Dialog.Description>
    </Dialog.Header>
    <Dialog.Footer>
      <Dialog.Close asChild>
        <Button variant="outline">Cancel</Button>
      </Dialog.Close>
      <Button>Save</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog>

// 2. Original form usage (backward compatibility)
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Button
} from '@geee-be/react-twui';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// 3. Mixed usage patterns also supported
import { Dialog, DialogTrigger, DialogContent, Button } from '@geee-be/react-twui';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <Dialog.Header>
      <Dialog.Title>Mixed Pattern</Dialog.Title>
    </Dialog.Header>
    <Dialog.Footer>
      <Button>Save</Button>
    </Dialog.Footer>
  </DialogContent>
</Dialog>
```

## Benefits of This Dual Export Pattern

### Developer Experience
- **Intuitive API**: Clear relationship between components with `Component.SubComponent` syntax
- **Better IntelliSense**: IDE can suggest sub-components when using compound form
- **Namespace Protection**: Reduces naming conflicts with compound form
- **Maximum Flexibility**: Both compound and original forms supported simultaneously
- **Gradual Migration**: Teams can adopt compound pattern gradually without breaking existing code
- **Choice of Style**: Developers can choose the pattern that fits their project best

### Code Organization
- **Logical Grouping**: Related components are visually connected in compound form
- **Easier Discovery**: Developers can explore available sub-components through compound API
- **Consistent Patterns**: All compound components follow same dual export structure
- **Full Backward Compatibility**: Existing individual imports continue to work unchanged
- **No Breaking Changes**: Zero migration overhead for existing codebases

### Documentation Benefits
- **Clearer Examples**: Usage examples can show both patterns
- **Better API Docs**: Clear hierarchy in documentation with compound form
- **Migration Flexibility**: Teams can migrate at their own pace
- **Reduced Confusion**: Multiple valid approaches clearly documented
- **Training Benefits**: New developers can learn compound pattern while existing developers continue with familiar patterns

## Testing Considerations

### Unit Tests
- Test compound component exports exist
- Test individual component exports still work
- Test TypeScript types are properly exposed
- Test component functionality unchanged

### Integration Tests
- Test with existing codebases to ensure no breaking changes
- Test Storybook stories still work
- Test with bundlers to ensure tree-shaking works
- Test with TypeScript strict mode

### Migration Testing
- Test gradual migration from individual to compound usage
- Test mixed usage patterns in same codebase
- Test with different import styles

## Rollout Strategy

### Phase 1: Internal Components
- Start with Dialog component (most commonly used)
- Gather feedback and refine pattern
- Update documentation and examples

### Phase 2: Layout Components
- Convert Card-like components (Sheet, Drawer)
- Update Storybook stories
- Create migration guides

### Phase 3: Navigation Components
- Convert Breadcrumb and similar components
- Update all documentation
- Announce pattern to users

### Phase 4: Remaining Components
- Convert remaining suitable components
- Standardize across entire library
- Update best practices documentation

## Migration Guide for Users

### No Breaking Changes - Three Usage Patterns Available
```typescript
// Pattern 1: Original form (unchanged - existing code works as-is)
import { Dialog, DialogTrigger, DialogContent } from '@geee-be/react-twui';

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>Content</DialogContent>
</Dialog>

// Pattern 2: Compound form (recommended for new code)
import { Dialog } from '@geee-be/react-twui';

<Dialog>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Content>Content</Dialog.Content>
</Dialog>

// Pattern 3: Mixed usage (transitional approach)
import { Dialog, DialogTrigger } from '@geee-be/react-twui';

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <Dialog.Content>Content</Dialog.Content>
</Dialog>
```

### Benefits for Users
- **Zero breaking changes** - all existing imports and usage patterns continue to work
- **Gradual migration** - teams can adopt compound pattern at their own pace
- **More intuitive API** for new development with compound form
- **Better TypeScript support** and IntelliSense with compound form
- **Clearer component relationships** in code with compound form
- **Flexible team adoption** - different team members can use different patterns

## Implementation Checklist

For each component conversion:
- [ ] Identify all sub-components and logical groupings
- [ ] Create compound type definition
- [ ] Implement Object.assign pattern
- [ ] Export individual components for backward compatibility
- [ ] Update component's README with new usage examples
- [ ] Update Storybook stories to show compound usage
- [ ] Test TypeScript types and exports
- [ ] Test backward compatibility with existing code
- [ ] Update package-level documentation
- [ ] Add migration notes to changelog

---

**Note**: This pattern is already successfully implemented in the Card component and provides an excellent model for converting other components. The goal is consistency across the library while maintaining backward compatibility and improving developer experience.
