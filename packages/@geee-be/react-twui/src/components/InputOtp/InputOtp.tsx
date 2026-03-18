'use client';

import { OTPInput, OTPInputContext } from 'input-otp';
import { Dot } from 'lucide-react';
import * as React from 'react';
import { cn } from '../../helpers/utils';

/* ---------------------------------- Types --------------------------------- */
export type InputOtpElement = React.ComponentRef<typeof OTPInput>;
export type InputOtpProps = React.ComponentPropsWithoutRef<typeof OTPInput> & {
  disableAutoComplete?: boolean;
};

/* -------------------------------- Component ------------------------------- */
const InputOtp = ({
  ref,
  className,
  containerClassName,
  disableAutoComplete,
  ...props
}: InputOtpProps & { ref?: React.Ref<InputOtpElement> }) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      'flex items-center has-disabled:opacity-50 w-fit',
      containerClassName,
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    data-1p-ignore={disableAutoComplete}
    autoComplete={disableAutoComplete ? 'off' : 'one-time-code'}
    spellCheck={false}
    {...props}
  />
);
InputOtp.displayName = 'InputOTP';

const InputOtpGroup = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  ref?: React.Ref<React.ComponentRef<'div'>>;
}) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-1', className)}
    {...props}
  />
);
InputOtpGroup.displayName = 'InputOtpGroup';

const InputOtpSlot = ({
  ref,
  index,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { index: number } & {
  ref?: React.Ref<React.ComponentRef<'div'>>;
}) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const slot = inputOTPContext.slots[index] ?? {
    char: null,
    hasFakeCaret: false,
    isActive: false,
  };
  const { char, hasFakeCaret, isActive } = slot;

  return (
    <div
      ref={ref}
      className={cn(
        'like-input relative flex h-10.5 w-10 items-center justify-center text-sm transition-all',
        isActive && 'z-10 focus-ring focus-ring-visible',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
};
InputOtpSlot.displayName = 'InputOtpSlot';

const InputOtpSeparator = ({
  ref,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  ref?: React.Ref<React.ComponentRef<'div'>>;
}) => (
  <div ref={ref} aria-hidden="true" {...props}>
    <Dot className="text-default" />
  </div>
);
InputOtpSeparator.displayName = 'InputOtpSeparator';

export { InputOtp, InputOtpGroup, InputOtpSeparator, InputOtpSlot };
