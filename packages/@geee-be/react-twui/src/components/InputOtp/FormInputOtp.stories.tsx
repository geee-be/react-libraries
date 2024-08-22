import type { Meta } from '@storybook/react';
import type { FC } from 'react';
import { useCallback, useEffect } from 'react';
import type { SubmitErrorHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button.js';
import { FormInput } from '../Input/FormInput.js';
import { FormInputOtp } from './FormInputOtp.js';
import { InputOtpGroup, InputOtpSeparator, InputOtpSlot } from './InputOtp.js';

const meta = {
  component: FormInputOtp,
} satisfies Meta<typeof FormInputOtp>;

export default meta;

interface FormData {
  foo: string;
  bar: string;
}

export const Default: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    mode: 'all',
    defaultValues: { foo: 'foobar', bar: '' },
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type),
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => console.log('errors changed', errors), [errors]);

  const onSubmit = useCallback(
    (data: FormData): void => console.log('submit', data),
    [],
  );
  const onInvalid: SubmitErrorHandler<FormData> = useCallback(
    (error) => console.log('submit invalid', error),
    [],
  );

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(onSubmit, onInvalid)(event).catch(console.log);
      }}
      className="space-y-6"
    >
      <FormInput
        control={control}
        name="foo"
        label="Foo"
        helperText="What can we call you?"
        required="Foo is important. You must give a value."
        minLength={5}
      />
      <FormInputOtp
        control={control}
        name="bar"
        label="One Time Password"
        helperText="Enter the OTP you received by email"
        maxLength={6}
        pushPasswordManagerStrategy="increase-width"
      >
        <InputOtpGroup>
          <InputOtpSlot index={0} />
          <InputOtpSlot index={1} />
          <InputOtpSlot index={2} />
        </InputOtpGroup>
        <InputOtpSeparator />
        <InputOtpGroup>
          <InputOtpSlot index={3} />
          <InputOtpSlot index={4} />
          <InputOtpSlot index={5} />
        </InputOtpGroup>
      </FormInputOtp>
      <Button type="submit">Submit</Button>
    </form>
  );
};
