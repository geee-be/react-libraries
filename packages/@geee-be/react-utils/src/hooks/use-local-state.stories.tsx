import type { Meta, StoryObj } from '@storybook/react';
import { useLocalState } from './use-local-state.js';

const meta: Meta = {
  title: 'hooks/useLocalState',
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: () => {
    const [value, setValue] = useLocalState('story-use-local-state', {
      val: 1,
    });
    console.log('render', value);
    return (
      <div>
        {JSON.stringify(value)}
        <button
          type="button"
          onClick={() => setValue((prev) => ({ val: prev.val + 1 }))}
        >
          Inc
        </button>
      </div>
    );
  },
};
