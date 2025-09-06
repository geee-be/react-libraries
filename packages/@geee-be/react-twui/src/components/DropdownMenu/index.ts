import {
  DropdownMenuCheckboxItem as DropdownMenuCheckboxItemComponent,
  DropdownMenu as DropdownMenuComponent,
  DropdownMenuContent as DropdownMenuContentComponent,
  DropdownMenuGroup as DropdownMenuGroupComponent,
  DropdownMenuItem as DropdownMenuItemComponent,
  DropdownMenuLabel as DropdownMenuLabelComponent,
  DropdownMenuPortal as DropdownMenuPortalComponent,
  DropdownMenuRadioGroup as DropdownMenuRadioGroupComponent,
  DropdownMenuRadioItem as DropdownMenuRadioItemComponent,
  DropdownMenuSeparator as DropdownMenuSeparatorComponent,
  DropdownMenuShortcut as DropdownMenuShortcutComponent,
  DropdownMenuSub as DropdownMenuSubComponent,
  DropdownMenuSubContent as DropdownMenuSubContentComponent,
  DropdownMenuSubTrigger as DropdownMenuSubTriggerComponent,
  DropdownMenuTrigger as DropdownMenuTriggerComponent,
} from './DropdownMenu';

type DropdownMenuCompound = typeof DropdownMenuComponent & {
  Root: typeof DropdownMenuComponent;
  CheckboxItem: typeof DropdownMenuCheckboxItemComponent;
  Content: typeof DropdownMenuContentComponent;
  Group: typeof DropdownMenuGroupComponent;
  Item: typeof DropdownMenuItemComponent;
  Label: typeof DropdownMenuLabelComponent;
  Portal: typeof DropdownMenuPortalComponent;
  RadioGroup: typeof DropdownMenuRadioGroupComponent;
  RadioItem: typeof DropdownMenuRadioItemComponent;
  Separator: typeof DropdownMenuSeparatorComponent;
  Shortcut: typeof DropdownMenuShortcutComponent;
  Sub: typeof DropdownMenuSubComponent;
  SubContent: typeof DropdownMenuSubContentComponent;
  SubTrigger: typeof DropdownMenuSubTriggerComponent;
  Trigger: typeof DropdownMenuTriggerComponent;
};

const DropdownMenu: DropdownMenuCompound = Object.assign(
  DropdownMenuComponent,
  {
    Root: DropdownMenuComponent,
    CheckboxItem: DropdownMenuCheckboxItemComponent,
    Content: DropdownMenuContentComponent,
    Group: DropdownMenuGroupComponent,
    Item: DropdownMenuItemComponent,
    Label: DropdownMenuLabelComponent,
    Portal: DropdownMenuPortalComponent,
    RadioGroup: DropdownMenuRadioGroupComponent,
    RadioItem: DropdownMenuRadioItemComponent,
    Separator: DropdownMenuSeparatorComponent,
    Shortcut: DropdownMenuShortcutComponent,
    Sub: DropdownMenuSubComponent,
    SubContent: DropdownMenuSubContentComponent,
    SubTrigger: DropdownMenuSubTriggerComponent,
    Trigger: DropdownMenuTriggerComponent,
  },
);

export {
  DropdownMenu,
  DropdownMenuCheckboxItemComponent as DropdownMenuCheckboxItem,
  DropdownMenuContentComponent as DropdownMenuContent,
  DropdownMenuGroupComponent as DropdownMenuGroup,
  DropdownMenuItemComponent as DropdownMenuItem,
  DropdownMenuLabelComponent as DropdownMenuLabel,
  DropdownMenuPortalComponent as DropdownMenuPortal,
  DropdownMenuRadioGroupComponent as DropdownMenuRadioGroup,
  DropdownMenuRadioItemComponent as DropdownMenuRadioItem,
  DropdownMenuSeparatorComponent as DropdownMenuSeparator,
  DropdownMenuShortcutComponent as DropdownMenuShortcut,
  DropdownMenuSubComponent as DropdownMenuSub,
  DropdownMenuSubContentComponent as DropdownMenuSubContent,
  DropdownMenuSubTriggerComponent as DropdownMenuSubTrigger,
  DropdownMenuTriggerComponent as DropdownMenuTrigger,
};
