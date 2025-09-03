import type { Meta, StoryObj } from '@storybook/react-vite';
import { type FC, useEffect } from 'react';
import type { SubmitErrorHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { Button } from '../Button/Button.js';
import { FormInput } from '../Input/index.js';
import { FormYearOfBirthPicker } from './FormYearOfBirthPicker.js';

interface FormData {
  foo: string;
  yob: number;
}

const YearOfBirthPickerStory: FC<{
  defaultValue?: number;
  required: boolean;
}> = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    mode: 'all',
    defaultValues: { foo: 'foobar', yob: props.defaultValue },
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
        name="foo"
        label="Foo"
        helperText="What can we call you?"
        required="Foo is important. You must give a value."
        minLength={5}
      />
      <FormYearOfBirthPicker
        control={control}
        name="yob"
        label="When were you born?"
        helperText="Gotta sound official"
        required={props.required}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
YearOfBirthPickerStory.displayName = 'YearOfBirthPicker';

const meta = {
  component: YearOfBirthPickerStory,
  render: (args) => <YearOfBirthPickerStory {...args} />,
} satisfies Meta<typeof YearOfBirthPickerStory>;

export default meta;
type Story = StoryObj<Meta<typeof YearOfBirthPickerStory>>;

export const Default: Story = {
  args: {},
};

export const Year1983: Story = {
  args: {
    ...Default.args,
    defaultValue: 1983,
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
  },
};
