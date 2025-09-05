export type { CommandDialogProps } from './Command.js';

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
  Dialog: typeof CommandDialogComponent;
  Empty: typeof CommandEmptyComponent;
  Group: typeof CommandGroupComponent;
  Input: typeof CommandInputComponent;
  Item: typeof CommandItemComponent;
  List: typeof CommandListComponent;
  Loading: typeof CommandLoadingComponent;
  Separator: typeof CommandSeparatorComponent;
};

export const Command: CommandCompound = Object.assign(CommandComponent, {
  Dialog: CommandDialogComponent,
  Empty: CommandEmptyComponent,
  Group: CommandGroupComponent,
  Input: CommandInputComponent,
  Item: CommandItemComponent,
  List: CommandListComponent,
  Loading: CommandLoadingComponent,
  Separator: CommandSeparatorComponent,
});

// Export original form components for backward compatibility and flexibility
export {
  CommandDialogComponent as CommandDialog,
  CommandEmptyComponent as CommandEmpty,
  CommandGroupComponent as CommandGroup,
  CommandInputComponent as CommandInput,
  CommandItemComponent as CommandItem,
  CommandListComponent as CommandList,
  CommandLoadingComponent as CommandLoading,
  CommandSeparatorComponent as CommandSeparator,
};
