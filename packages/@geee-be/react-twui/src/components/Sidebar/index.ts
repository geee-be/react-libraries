import {
  Sidebar as SidebarComponent,
  SidebarContent as SidebarContentComponent,
  SidebarFooter as SidebarFooterComponent,
  SidebarGroupAction as SidebarGroupActionComponent,
  SidebarGroup as SidebarGroupComponent,
  SidebarGroupContent as SidebarGroupContentComponent,
  SidebarGroupLabel as SidebarGroupLabelComponent,
  SidebarHeader as SidebarHeaderComponent,
  SidebarInput as SidebarInputComponent,
  SidebarInset as SidebarInsetComponent,
  SidebarMenuAction as SidebarMenuActionComponent,
  SidebarMenuBadge as SidebarMenuBadgeComponent,
  SidebarMenuButton as SidebarMenuButtonComponent,
  SidebarMenu as SidebarMenuComponent,
  SidebarMenuItem as SidebarMenuItemComponent,
  SidebarMenuSkeleton as SidebarMenuSkeletonComponent,
  SidebarMenuSubButton as SidebarMenuSubButtonComponent,
  SidebarMenuSub as SidebarMenuSubComponent,
  SidebarMenuSubItem as SidebarMenuSubItemComponent,
  SidebarProvider as SidebarProviderComponent,
  SidebarRail as SidebarRailComponent,
  SidebarSeparator as SidebarSeparatorComponent,
  SidebarTrigger as SidebarTriggerComponent,
  useSidebar,
} from './Sidebar';

// Define the compound type
type SidebarCompound = typeof SidebarComponent & {
  Content: typeof SidebarContentComponent;
  Footer: typeof SidebarFooterComponent;
  Group: typeof SidebarGroupComponent;
  GroupAction: typeof SidebarGroupActionComponent;
  GroupContent: typeof SidebarGroupContentComponent;
  GroupLabel: typeof SidebarGroupLabelComponent;
  Header: typeof SidebarHeaderComponent;
  Input: typeof SidebarInputComponent;
  Inset: typeof SidebarInsetComponent;
  Menu: typeof SidebarMenuComponent;
  MenuAction: typeof SidebarMenuActionComponent;
  MenuBadge: typeof SidebarMenuBadgeComponent;
  MenuButton: typeof SidebarMenuButtonComponent;
  MenuItem: typeof SidebarMenuItemComponent;
  MenuSkeleton: typeof SidebarMenuSkeletonComponent;
  MenuSub: typeof SidebarMenuSubComponent;
  MenuSubButton: typeof SidebarMenuSubButtonComponent;
  MenuSubItem: typeof SidebarMenuSubItemComponent;
  Provider: typeof SidebarProviderComponent;
  Rail: typeof SidebarRailComponent;
  Separator: typeof SidebarSeparatorComponent;
  Trigger: typeof SidebarTriggerComponent;
};

// Create compound component with sub-components attached
const Sidebar: SidebarCompound = Object.assign(SidebarComponent, {
  Content: SidebarContentComponent,
  Footer: SidebarFooterComponent,
  Group: SidebarGroupComponent,
  GroupAction: SidebarGroupActionComponent,
  GroupContent: SidebarGroupContentComponent,
  GroupLabel: SidebarGroupLabelComponent,
  Header: SidebarHeaderComponent,
  Input: SidebarInputComponent,
  Inset: SidebarInsetComponent,
  Menu: SidebarMenuComponent,
  MenuAction: SidebarMenuActionComponent,
  MenuBadge: SidebarMenuBadgeComponent,
  MenuButton: SidebarMenuButtonComponent,
  MenuItem: SidebarMenuItemComponent,
  MenuSkeleton: SidebarMenuSkeletonComponent,
  MenuSub: SidebarMenuSubComponent,
  MenuSubButton: SidebarMenuSubButtonComponent,
  MenuSubItem: SidebarMenuSubItemComponent,
  Provider: SidebarProviderComponent,
  Rail: SidebarRailComponent,
  Separator: SidebarSeparatorComponent,
  Trigger: SidebarTriggerComponent,
});

// Export individual components for backward compatibility
export {
  Sidebar,
  SidebarContentComponent as SidebarContent,
  SidebarFooterComponent as SidebarFooter,
  SidebarGroupComponent as SidebarGroup,
  SidebarGroupActionComponent as SidebarGroupAction,
  SidebarGroupContentComponent as SidebarGroupContent,
  SidebarGroupLabelComponent as SidebarGroupLabel,
  SidebarHeaderComponent as SidebarHeader,
  SidebarInputComponent as SidebarInput,
  SidebarInsetComponent as SidebarInset,
  SidebarMenuComponent as SidebarMenu,
  SidebarMenuActionComponent as SidebarMenuAction,
  SidebarMenuBadgeComponent as SidebarMenuBadge,
  SidebarMenuButtonComponent as SidebarMenuButton,
  SidebarMenuItemComponent as SidebarMenuItem,
  SidebarMenuSkeletonComponent as SidebarMenuSkeleton,
  SidebarMenuSubComponent as SidebarMenuSub,
  SidebarMenuSubButtonComponent as SidebarMenuSubButton,
  SidebarMenuSubItemComponent as SidebarMenuSubItem,
  SidebarProviderComponent as SidebarProvider,
  SidebarRailComponent as SidebarRail,
  SidebarSeparatorComponent as SidebarSeparator,
  SidebarTriggerComponent as SidebarTrigger,
  useSidebar,
};
