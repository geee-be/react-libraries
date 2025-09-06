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
  Root: typeof BreadcrumbComponent;
  Ellipsis: typeof BreadcrumbEllipsisComponent;
  Item: typeof BreadcrumbItemComponent;
  Link: typeof BreadcrumbLinkComponent;
  List: typeof BreadcrumbListComponent;
  Page: typeof BreadcrumbPageComponent;
  Separator: typeof BreadcrumbSeparatorComponent;
};

const Breadcrumb: BreadcrumbCompound = Object.assign(BreadcrumbComponent, {
  Root: BreadcrumbComponent,
  Ellipsis: BreadcrumbEllipsisComponent,
  Item: BreadcrumbItemComponent,
  Link: BreadcrumbLinkComponent,
  List: BreadcrumbListComponent,
  Page: BreadcrumbPageComponent,
  Separator: BreadcrumbSeparatorComponent,
});

export default Breadcrumb;
