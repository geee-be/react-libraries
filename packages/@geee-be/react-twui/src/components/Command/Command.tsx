'use client';

import type { DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ReactNode,
} from 'react';
import { cn } from '../../helpers/utils';
import { Dialog, DialogContent } from '../Dialog';

export type CommandProps = ComponentPropsWithoutRef<typeof CommandPrimitive>;

const Command = forwardRef<
  ElementRef<typeof CommandPrimitive>,
  ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-lg bg-paper/100 text-popover-foreground',
      // focus
      'border-none outline outline-2 outline-control-focus/50',
      // color
      'bg-control text-control-fg border border-default hover:border-default/70 data-[placeholder]:text-control-fg/50',
      // '[&_[cmdk-input-wrapper]]:border-default [&_[cmdk-input-wrapper]]:hover:border-default/70',
      className,
    )}
    {...props}
  />
));

Command.displayName = CommandPrimitive.displayName;

export interface CommandDialogProps extends DialogProps {
  shouldFilter?: boolean;
  value?: string;
  onValueChange?: (value: string | undefined) => void;
}

const CommandDialog = ({
  children,
  shouldFilter,
  value,
  onValueChange,
  ...props
}: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent
        className="overflow-hidden p-0 shadow-lg"
        aria-description="Command dialog"
      >
        <Command
          shouldFilter={shouldFilter}
          value={value}
          onValueChange={onValueChange}
        >
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = forwardRef<
  ElementRef<typeof CommandPrimitive.Input>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & { icon?: ReactNode }
>(({ className, icon, ...props }, ref) => (
  <div
    className="flex items-center border-b border-paper-border hover:border-paper-border px-4"
    cmdk-input-wrapper=""
  >
    {icon ?? <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />}
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-lg bg-paper/100 py-3 text-sm outline-none placeholder:text-control-fg/50 disabled:cursor-not-allowed disabled:text-control-fg/50',
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = forwardRef<
  ElementRef<typeof CommandPrimitive.List>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      'max-h-[300px] overflow-y-auto overflow-x-hidden py-1',
      className,
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = forwardRef<
  ElementRef<typeof CommandPrimitive.Empty>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="p-2 text-center text-sm italic text-control-fg/70"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandLoading = forwardRef<
  ElementRef<typeof CommandPrimitive.Loading>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Loading>
>((props, ref) => (
  <CommandPrimitive.Loading
    ref={ref}
    className="p-2 text-center text-sm italic text-control-fg/70"
    {...props}
  />
));

CommandLoading.displayName = CommandPrimitive.Loading.displayName;

const CommandGroup = forwardRef<
  ElementRef<typeof CommandPrimitive.Group>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'overflow-hidden [&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-muted-foreground',
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = forwardRef<
  ElementRef<typeof CommandPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('h-px bg-control-fg/10 m-1', className)}
    {...props}
  />
));

CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = forwardRef<
  ElementRef<typeof CommandPrimitive.Item>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-pointer leading-none select-none items-center rounded-lg mx-1 px-4 py-2 text-sm h-[45px] pl-6 outline-none data-[disabled=true]:pointer-events-none',
      // colors
      'text-control-fg data-[disabled=true]:text-control-fg/50 aria-selected:bg-control-fg/10 aria-selected:text-control-fg',
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
  CommandSeparator,
};
