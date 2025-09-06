import { Label as LabelComponent } from './Label.js';

// Label is already compound in the source file with Label.Helper
// Extract the Helper component for individual export
const LabelHelperComponent = LabelComponent.Helper;

type LabelCompound = typeof LabelComponent & {
  Root: typeof LabelComponent;
  Helper: typeof LabelHelperComponent;
};

const Label: LabelCompound = Object.assign(LabelComponent, {
  Root: LabelComponent,
  Helper: LabelHelperComponent,
});

export { Label, LabelHelperComponent as LabelHelper };

// Export types for backward compatibility
export type { LabelElement, LabelProps } from './Label.js';
