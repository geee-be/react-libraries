import type { Meta } from '@storybook/react';
import type { FC } from 'react';
import { useEffect } from 'react';
import type { SubmitErrorHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button.js';
import type { ComboboxGroupProps } from './index.js';
import { FormCombobox } from './index.js';

const meta = {
  component: FormCombobox,
  argTypes: {
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof FormCombobox>;

export default meta;

const items: ComboboxGroupProps[] = [
  {
    key: 'numbers',
    label: 'Numbers',
    items: [
      {
        key: 'one',
        label: 'One',
      },
      {
        key: 'two',
        label: 'Two',
      },
      {
        key: 'three',
        label: 'Three',
        disabled: true,
      },
      {
        key: 'four',
        label: 'Four',
      },
    ],
  },
];

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
  } = useForm<FormData>({ mode: 'all' });

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type),
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => console.log('errors changed', errors), [errors]);

  const onSubmit = (data: FormData): void => console.log(data);
  const onInvalid: SubmitErrorHandler<FormData> = (error) =>
    console.log('submit invalid', error);

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(onSubmit, onInvalid)(event).catch(console.log);
      }}
      className="space-y-6"
    >
      <FormCombobox
        control={control}
        name="foo"
        items={() => Promise.resolve(items)}
        label="Foo"
        emptyHint="No results found."
        description="This is the foo field"
        helperText="What can we call you?"
        loadingHint="Loading..."
        placeholder="Select an option"
        required="Must have a value"
      />
      <FormCombobox
        control={control}
        name="bar"
        items={() => Promise.resolve(items)}
        label="Bar"
        emptyHint="No results found."
        helperText="Not foo"
        loadingHint="Loading..."
        placeholder="Select an option"
        tooltip="This field is optional"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
