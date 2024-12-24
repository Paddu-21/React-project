export interface NavItem {
  id: string;
  title: string;
  href: string;
  subItems?: NavItem[];
}