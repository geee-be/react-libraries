# Copilot Instructions Creation and Maintenance Prompts

This file contains comprehensive prompts for creating and maintaining Copilot AI instruction files across the @geee-be/react-libraries monorepo.

## Overview

These instruction files help Copilot understand the project structure, patterns, and conventions to provide better assistance when working with the codebase.

## Current Instruction Files

1. **`.copilot-instructions.md`** - Root monorepo overview and guidelines
2. **`.copilot-workspace.md`** - Detailed workspace development guide
3. **`packages/@geee-be/react-twui/.copilot-instructions.md`** - UI component library guide
4. **`packages/@geee-be/react-utils/.copilot-instructions.md`** - React utilities guide
5. **`.prompts/compound-component-conversion.md`** - Guide for converting components to compound pattern

---

## A. General Update Guidelines

### When to Update

Update instruction files when:
- New packages are added to the monorepo
- Build configuration changes (tsup, TypeScript, etc.)
- New development patterns are established
- Dependencies are significantly updated
- New tooling is introduced
- Package structure changes
- Development workflow changes
- New coding standards are adopted

### Content Requirements
- **Accuracy**: Ensure all technical details match current implementation
- **Completeness**: Cover all major aspects of development
- **Clarity**: Use clear, specific language for AI understanding
- **Examples**: Include relevant code examples and usage patterns
- **Structure**: Maintain consistent formatting and organization

### Key Sections to Maintain
- Package overviews and purposes
- Technology stack and versions
- Development patterns and conventions
- Build and deployment processes
- Code quality standards
- File organization patterns
- Common troubleshooting scenarios

### Technical Details to Include
- TypeScript configuration specifics
- Build tool configurations (tsup, tsc)
- CSS architecture and Tailwind setup
- Component development patterns
- Hook implementation guidelines
- Testing approaches
- Storybook integration

---

## B. Package Instructions Template

Each package instruction file should follow this structure:

```markdown
# @geee-be/[package-name] - Copilot Instructions

## Package Overview
[Brief description of package purpose and scope]

## Package Structure
[File/directory structure with explanations]

## Key Dependencies
[Main dependencies with brief explanations]

## [Package-Specific Sections]
[Relevant sections for the package type]

## Development Patterns
[Common patterns and conventions]

## TypeScript Support
[Type system usage and patterns]

## Usage Examples
[Code examples showing common usage]

## Build Configuration
[Build setup and output details]

## Testing & Development
[Development tools and testing approach]

## Best Practices
[Package-specific best practices]

## [Additional Sections as Needed]
[SSR considerations, performance notes, etc.]
```

---

## C. Package-Specific Guidelines

### UI Component Libraries (react-twui style)

**Focus Areas:**
- Component architecture and composition patterns
- Styling system (Tailwind CSS, CSS custom properties)
- Accessibility implementation with Radix UI
- Variant management systems using CVA
- Theme customization capabilities
- Icon integration patterns
- Animation and interaction patterns
- Form integration examples
- shadcn/ui compatibility and attribution

**Required Sections:**
- Component Architecture
- Styling System
- Accessibility Guidelines
- Variant Management
- Theme Customization
- Storybook Integration
- Performance Optimization
- Integration with shadcn/ui

**Code Example Requirements:**
```typescript
// Component usage with variants
<Button variant="outline" size="lg">Click me</Button>

// Compound component patterns
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
  <Card.Content>Content</Card.Content>
</Card>

// Theme customization
:root {
  --primary: 220 100% 50%;
  --primary-fg: 0 0% 100%;
}
```

### Utility Libraries (react-utils style)

**Focus Areas:**
- Hook implementation patterns
- Browser API integrations
- SSR/client-side considerations
- Performance optimizations
- State management patterns
- Event handling utilities
- Environment detection
- Cross-framework compatibility

**Required Sections:**
- Hook Implementation Patterns
- SSR Considerations
- Browser API Usage
- State Management
- Event Handling
- Environment Detection
- Performance Guidelines
- Framework Integration

**Code Example Requirements:**
```typescript
// SSR-safe patterns
const isClient = useIsClient();
if (!isClient) return <div>Loading...</div>;

// State management with persistence
const [theme, setTheme] = useLocalState('theme', 'light');

// Cross-tab communication
const [message, postMessage] = useBroadcastChannel('channel');
```

---

## D. Content Requirements

### Technical Accuracy
- Verify all code examples compile and work
- Check dependency versions match package.json
- Ensure file paths and imports are correct
- Test build commands and scripts

### Completeness
- Cover all major features and capabilities
- Include edge cases and error handling
- Document performance considerations
- Explain integration patterns
- Cover development workflow

### Code Examples
- Show realistic usage scenarios
- Include TypeScript types and interfaces
- Demonstrate best practices
- Cover common patterns
- Show error handling

### Development Guidance
- Explain when to use different approaches
- Document component/hook lifecycle considerations
- Include debugging tips
- Explain testing strategies
- Cover performance implications

---

## E. Specific Areas to Monitor

### React TWUI Package
- Tailwind CSS v4 features and changes
- New component additions and updates
- Radix UI integration patterns
- CSS custom property usage
- Component variant patterns with CVA
- Storybook story conventions
- shadcn/ui compatibility notes
- Accessibility compliance updates

### React Utils Package
- New hooks and utilities
- SSR compatibility patterns
- Browser API integrations
- State management patterns
- Performance considerations
- Framework-specific integration guides

### Workspace Configuration
- pnpm workspace changes
- Biome configuration updates
- Changeset workflow modifications
- Build optimization changes
- Development script updates

---

## F. Quality Checklist

Before finalizing updates:
- [ ] Package purpose clearly explained
- [ ] File structure documented with context
- [ ] Key dependencies listed with rationale
- [ ] Development patterns clearly documented
- [ ] TypeScript usage examples included
- [ ] Build configuration explained
- [ ] Common use cases covered with examples
- [ ] Best practices clearly stated
- [ ] Error handling patterns documented
- [ ] Performance considerations mentioned
- [ ] Integration patterns explained
- [ ] Troubleshooting guidance provided

---

## G. Validation Checklist

Before finalizing updates:
- [ ] Verify all file paths and commands are correct
- [ ] Test code examples for syntax accuracy
- [ ] Ensure dependency versions match package.json files
- [ ] Check that new patterns are documented
- [ ] Validate TypeScript examples compile
- [ ] Confirm build commands work as documented
- [ ] Review for consistency across all instruction files

---

## H. Format Standards

- Use Markdown with proper syntax highlighting
- Include clear section headers and organization
- Use code blocks with appropriate language tags
- Maintain consistent indentation and formatting
- Include relevant file structure examples
- Use bullet points for lists and steps
- Add context for complex technical concepts

---

## I. Example Update Scenarios

### New Development Pattern
1. Update component list in react-twui instructions
2. Add usage example if it follows new patterns
3. Document any new dependencies or patterns
4. Update workspace guide if new build steps required
5. **For compound components**: Follow the conversion guide in `.prompts/compound-component-conversion.md`

### Build Configuration Change
1. Update build sections in relevant package instructions
2. Modify development command documentation
3. Update troubleshooting sections if needed
4. Verify all examples still work

### New Development Pattern
1. Document the pattern with examples
2. Explain when and why to use it
3. Add to best practices sections
4. Include in common patterns documentation

### Dependency Update
1. Update version numbers in documentation
2. Check if new features should be documented
3. Update integration examples if APIs changed
4. Test all code examples still work

---

## J. Attribution Requirements

### For react-twui Instructions
Always include proper attribution to:
- **shadcn/ui**: Acknowledge as inspiration and foundation
- **Radix UI**: Credit for accessibility primitives
- **Tailwind CSS**: Credit for styling framework
- Include links to original projects
- Thank maintainers and community

### Example Attribution Section
```markdown
## Credits and Inspiration

This library builds upon excellent work from:
- **[shadcn/ui](https://ui.shadcn.com/)** - Component patterns and design inspiration
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling framework

Special thanks to @shadcn and the Radix UI team for their contributions to the React ecosystem.
```

---

**Remember**: These instruction files are critical for maintaining development velocity and code quality. Keep them accurate, comprehensive, and up-to-date with the actual codebase.
