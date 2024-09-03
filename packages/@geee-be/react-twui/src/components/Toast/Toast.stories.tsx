import { sleep } from '@geee-be/core';
import type { Meta } from '@storybook/react';
import type { FC } from 'react';
import { Button } from '../Button';
import { toast, Toaster, ToastType, type ToastOptions } from './index';

const meta = {
  component: Toaster,
} satisfies Meta<typeof Toaster>;

export default meta;

const options: ToastOptions = {
  autoClose: 2000,
  hideProgressBar: false,
  position: 'top-right',
  pauseOnHover: true,
};

export const Default: FC = () => (
  <>
    <Toaster />
    <div className="flex flex-col gap-3 max-w-96">
      <Button
        onClick={() => {
          toast('Default toast', options);
        }}
      >
        Show Toast
      </Button>
      <Button
        color="success"
        onClick={() => {
          toast('Success toast', { ...options, type: ToastType.success });
        }}
      >
        Success Toast
      </Button>
      <Button
        onClick={() => {
          toast.promise(
            () => sleep(5000),
            {
              pending: 'Promise is pending',
              success: 'Promise resolved 👌',
              error: 'Promise rejected 🤯',
            },
            { ...options },
          );
        }}
      >
        Async Toast
      </Button>
    </div>
  </>
);
