import type { Meta, StoryObj } from '@storybook/react-vite';
import type { FC } from 'react';
import { Button } from '../Button/Button.js';
import type { DrawerProps } from './Drawer.js';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHandle,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './index.js';

const meta = {
  component: Drawer as FC<DrawerProps>,
  argTypes: {
    children: { control: undefined },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bottom: Story = {
  args: {
    children: (
      <>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent from="bottom">
          <DrawerHandle />
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </>
    ),
    direction: 'bottom',
  },
};

export const Top: Story = {
  args: {
    children: (
      <>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent from="top">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
          <DrawerHandle />
        </DrawerContent>
      </>
    ),
    direction: 'top',
  },
};

export const Left: Story = {
  args: {
    children: (
      <>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent from="left">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </>
    ),
    direction: 'left',
  },
};

export const FloatLeft: Story = {
  args: {
    children: (
      <>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent from="left" inset="md">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </>
    ),
    direction: 'left',
  },
};

export const Right: Story = {
  args: {
    children: (
      <>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent from="right">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </>
    ),
    direction: 'right',
  },
};
