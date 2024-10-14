'use client';

import { OTPInput, OTPInputContext } from 'input-otp';
import { Dot } from 'lucide-react';
import * as React from 'react';
import { Style } from '../../helpers/style';
import { cn } from '../../helpers/utils';

/* ---------------------------------- Types --------------------------------- */
export type InputOtpElement = React.ElementRef<typeof OTPInput>;
export type InputOtpProps = React.ComponentPropsWithoutRef<typeof OTPInput>;

/* -------------------------------- Component ------------------------------- */
const InputOtp = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      'flex items-center gap-2 has-[:disabled]:opacity-50 w-fit',
      containerClassName,
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}
  />
));
InputOtp.displayName = 'InputOTP';

const InputOtpGroup = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
));
InputOtpGroup.displayName = 'InputOtpGroup';

const InputOtpSlot = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
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
        'relative flex h-[2.625rem] w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-lg first:border-l last:rounded-r-lg',
        Style.inputColorStateNormal(),
        isActive &&
          'z-10 border-l ring-2 ring-primary ring-offset-background ring-offset-2',
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
});
InputOtpSlot.displayName = 'InputOtpSlot';

const InputOtpSeparator = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  // biome-ignore lint/a11y/useAriaPropsForRole: invalid
  <div ref={ref} role="separator" {...props}>
    <Dot className="text-default" />
  </div>
));
InputOtpSeparator.displayName = 'InputOtpSeparator';

export { InputOtp, InputOtpGroup, InputOtpSeparator, InputOtpSlot };
