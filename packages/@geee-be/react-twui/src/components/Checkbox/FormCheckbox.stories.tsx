import type { Meta } from '@storybook/react';
import type { FC } from 'react';
import { useEffect } from 'react';
import type { SubmitErrorHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button.js';
import { FormCheckbox } from './FormCheckbox.js';

const meta = {
  component: FormCheckbox,
} satisfies Meta<typeof FormCheckbox>;

export default meta;

interface FormData {
  foo: boolean;
  bar?: boolean;
}

export const Default: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    mode: 'all',
    defaultValues: { foo: true, bar: undefined },
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
      <FormCheckbox
        control={control}
        name="foo"
        label="Foo"
        helperText="What can we call you?"
      />
      <FormCheckbox
        control={control}
        name="bar"
        label="Bar"
        required="Bar is important. You must give a value."
        helperText="Gotta sound official"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
