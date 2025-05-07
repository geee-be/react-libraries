import type { Meta } from '@storybook/react';
import { subYears } from 'date-fns';
import type { FC } from 'react';
import { useEffect } from 'react';
import type { SubmitErrorHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button.js';
import { FormInput } from '../Input/index.js';
import { FormDatePicker } from './FormDatePicker.js';

const meta = {
  component: FormDatePicker,
} satisfies Meta<typeof FormDatePicker>;

export default meta;

interface FormData {
  name: string;
  birthdate?: Date;
  appointmentDate?: Date;
}

export const Default: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    mode: 'all',
    defaultValues: {
      name: '',
      birthdate: undefined,
      appointmentDate: new Date(),
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type),
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => console.log('errors changed', errors), [errors]);

  const onSubmit = (data: FormData): void => console.log('submit', data);
  const onInvalid: SubmitErrorHandler<FormData> = (error) =>
    console.log('submit invalid', error);

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(onSubmit, onInvalid)(event).catch(console.log);
      }}
      className="space-y-6"
    >
      <FormInput
        control={control}
        name="name"
        label="Full Name"
        helperText="Please enter your full name"
        required="Name is required."
        minLength={3}
      />
      <FormDatePicker
        control={control}
        name="birthdate"
        label="Date of Birth"
        helperText="Please select your date of birth"
        placeholder="Select your birthdate"
        required="Date of birth is required."
        max={subYears(new Date(), 18)}
      />
      <FormDatePicker
        control={control}
        name="appointmentDate"
        label="Appointment Date"
        helperText="Please select your preferred appointment date"
        placeholder="Select appointment date"
        required="Appointment date is required."
        min={new Date()}
        mode="single"
        showFooter
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export const WithValidation: FC = () => {
  const today = new Date();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'all',
    defaultValues: {
      name: '',
      birthdate: undefined,
      appointmentDate: undefined,
    },
  });

  const onSubmit = (data: FormData): void => console.log('submit', data);
  const onInvalid: SubmitErrorHandler<FormData> = (error) =>
    console.log('submit invalid', error);

  useEffect(() => console.log('errors changed', errors), [errors]);

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(onSubmit, onInvalid)(event).catch(console.log);
      }}
      className="space-y-6"
    >
      <FormDatePicker
        control={control}
        name="birthdate"
        label="Date of Birth"
        helperText="Must be at least 18 years old"
        required="Date of birth is required"
        max={{
          value: subYears(today, 18),
          message: 'You must be at least 18 years old.',
        }}
        dateFormat="PPP"
      />
      <FormDatePicker
        control={control}
        name="appointmentDate"
        label="Appointment Date"
        placeholder="Must be a future date"
        required="Appointment date is required."
        min={{ value: today, message: 'Appointment must be in the future.' }}
        dateFormat="PPP"
        showFooter
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
