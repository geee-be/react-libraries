import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Async } from './index';

const meta: Meta<typeof Async> = {
  title: 'Async',
  component: Async,
};
export default meta;

type Story = StoryObj<typeof Async>;

const slowFunction = (ms = 1000) =>
  new Promise<string>((resolve) => setTimeout(() => resolve('Loaded!'), ms));

export const Default: Story = {
  render: () => (
    <Async
      waitFor={() => slowFunction()}
      fallback={<span>Loading...</span>}
      error={(e) => <span style={{ color: 'red' }}>Error: {String(e)}</span>}
      render={(data) => <span>Result: {data}</span>}
    />
  ),
};

export const Reject: Story = {
  render: () => (
    <Async
      waitFor={() =>
        new Promise<string>((_resolve, reject) =>
          setTimeout(() => reject('Something went wrong'), 1000),
        )
      }
      fallback={<span>Loading...</span>}
      error={(e) => <span style={{ color: 'red' }}>Error: {String(e)}</span>}
      render={(data) => <span>Result: {data}</span>}
    />
  ),
};

export const Dynamic: Story = {
  render: () => {
    const [shouldError, setShouldError] = useState(false);
    return (
      <div>
        <button type="button" onClick={() => setShouldError((v) => !v)}>
          Toggle Error
        </button>
        <Async
          waitFor={() =>
            new Promise<string>((resolve, reject) =>
              setTimeout(
                () =>
                  shouldError
                    ? reject('Manual error')
                    : resolve('Dynamic loaded!'),
                1000,
              ),
            )
          }
          fallback={<span>Loading...</span>}
          error={(e) => (
            <span style={{ color: 'red' }}>Error: {String(e)}</span>
          )}
          render={(data) => <span>Result: {data}</span>}
        />
      </div>
    );
  },
};
