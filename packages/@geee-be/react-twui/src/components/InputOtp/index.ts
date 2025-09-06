export type { FormInputOtpElement, FormInputOtpProps } from './FormInputOtp.js';
export { FormInputOtp } from './FormInputOtp.js';
export type { InputOtpElement, InputOtpProps } from './InputOtp.js';

import {
  InputOtp as InputOtpComponent,
  InputOtpGroup as InputOtpGroupComponent,
  InputOtpSeparator as InputOtpSeparatorComponent,
  InputOtpSlot as InputOtpSlotComponent,
} from './InputOtp.js';

// Define the compound type
type InputOtpCompound = typeof InputOtpComponent & {
  Group: typeof InputOtpGroupComponent;
  Separator: typeof InputOtpSeparatorComponent;
  Slot: typeof InputOtpSlotComponent;
};

// Create compound component with sub-components attached
const InputOtp: InputOtpCompound = Object.assign(InputOtpComponent, {
  Group: InputOtpGroupComponent,
  Separator: InputOtpSeparatorComponent,
  Slot: InputOtpSlotComponent,
});

// Export individual components for backward compatibility
export {
  InputOtp,
  InputOtpGroupComponent as InputOtpGroup,
  InputOtpSeparatorComponent as InputOtpSeparator,
  InputOtpSlotComponent as InputOtpSlot,
};
