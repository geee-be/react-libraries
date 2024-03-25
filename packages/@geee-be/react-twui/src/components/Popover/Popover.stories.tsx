import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

const meta = {
  component: Popover,
  argTypes: {
    children: { table: { disable: true } },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <PopoverTrigger asChild>
          <Button variant="solid" color="info">
            Open popover
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <Input id="width" defaultValue="100%" />
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input id="maxWidth" defaultValue="300px" />
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <Input id="height" defaultValue="25px" />
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input id="maxHeight" defaultValue="none" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </>
    ),
  },
};
