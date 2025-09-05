export type { BreadcrumbProps } from './Breadcrumb.js';

import {
  Breadcrumb as BreadcrumbComponent,
  BreadcrumbEllipsis as BreadcrumbEllipsisComponent,
  BreadcrumbItem as BreadcrumbItemComponent,
  BreadcrumbLink as BreadcrumbLinkComponent,
  BreadcrumbList as BreadcrumbListComponent,
  BreadcrumbPage as BreadcrumbPageComponent,
  BreadcrumbSeparator as BreadcrumbSeparatorComponent,
} from './Breadcrumb.js';

type BreadcrumbCompound = typeof BreadcrumbComponent & {
  Ellipsis: typeof BreadcrumbEllipsisComponent;
  Item: typeof BreadcrumbItemComponent;
  Link: typeof BreadcrumbLinkComponent;
  List: typeof BreadcrumbListComponent;
  Page: typeof BreadcrumbPageComponent;
  Separator: typeof BreadcrumbSeparatorComponent;
};

export const Breadcrumb: BreadcrumbCompound = Object.assign(
  BreadcrumbComponent,
  {
    Ellipsis: BreadcrumbEllipsisComponent,
    Item: BreadcrumbItemComponent,
    Link: BreadcrumbLinkComponent,
    List: BreadcrumbListComponent,
    Page: BreadcrumbPageComponent,
    Separator: BreadcrumbSeparatorComponent,
  },
);

export {
  BreadcrumbEllipsisComponent as BreadcrumbEllipsis,
  BreadcrumbItemComponent as BreadcrumbItem,
  BreadcrumbLinkComponent as BreadcrumbLink,
  BreadcrumbListComponent as BreadcrumbList,
  BreadcrumbPageComponent as BreadcrumbPage,
  BreadcrumbSeparatorComponent as BreadcrumbSeparator,
};
