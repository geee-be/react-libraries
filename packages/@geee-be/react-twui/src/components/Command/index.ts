import {
  Command as CommandComponent,
  CommandDialog as CommandDialogComponent,
  CommandEmpty as CommandEmptyComponent,
  CommandGroup as CommandGroupComponent,
  CommandInput as CommandInputComponent,
  CommandItem as CommandItemComponent,
  CommandList as CommandListComponent,
  CommandLoading as CommandLoadingComponent,
  CommandSeparator as CommandSeparatorComponent,
} from './Command.js';

type CommandCompound = typeof CommandComponent & {
  Root: typeof CommandComponent;
  Dialog: typeof CommandDialogComponent;
  Empty: typeof CommandEmptyComponent;
  Group: typeof CommandGroupComponent;
  Input: typeof CommandInputComponent;
  Item: typeof CommandItemComponent;
  List: typeof CommandListComponent;
  Loading: typeof CommandLoadingComponent;
  Separator: typeof CommandSeparatorComponent;
};

const Command: CommandCompound = Object.assign(CommandComponent, {
  Root: CommandComponent,
  Dialog: CommandDialogComponent,
  Empty: CommandEmptyComponent,
  Group: CommandGroupComponent,
  Input: CommandInputComponent,
  Item: CommandItemComponent,
  List: CommandListComponent,
  Loading: CommandLoadingComponent,
  Separator: CommandSeparatorComponent,
});

export {
  Command,
  CommandDialogComponent as CommandDialog,
  CommandEmptyComponent as CommandEmpty,
  CommandGroupComponent as CommandGroup,
  CommandInputComponent as CommandInput,
  CommandItemComponent as CommandItem,
  CommandListComponent as CommandList,
  CommandLoadingComponent as CommandLoading,
  CommandSeparatorComponent as CommandSeparator,
};

export type { CommandDialogProps } from './Command.js';
