import type { Meta } from '@storybook/react';
import type { FC } from 'react';
import { useEffect } from 'react';
import type { SubmitErrorHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button.js';
import { FormInput } from '../Input/index.js';
import { FormInputImage } from './FormInputImage.js';

const meta = {
  component: FormInputImage,
} satisfies Meta<typeof FormInputImage>;

export default meta;

interface FormData {
  foo: string;
  bar?: Blob;
}

export const Default: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    mode: 'all',
    defaultValues: { foo: 'foobar', bar: undefined },
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

  const blob = watch('bar');

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
      <FormInputImage
        control={control}
        name="bar"
        label="Bar"
        helperText="Select an image"
        accept={{
          'image/png': ['.png'],
          'image/jpeg': ['.jpg', '.jpeg'],
          'image/svg+xml': ['.svg'],
          'image/webp': ['.webp'],
        }}
        imageSpec={{ width: 256, height: 256 }}
        placeholder="Drag 'n' drop an image here, or click to select one"
        className="max-w-64 h-64"
      />
      {blob && <img src={URL.createObjectURL(blob)} alt="bar" />}
      <Button type="submit">Submit</Button>
    </form>
  );
};
