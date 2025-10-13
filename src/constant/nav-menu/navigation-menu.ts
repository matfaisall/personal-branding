import { NavigationMenuProps } from '@/types/menu.types';

export const navigationMenu: NavigationMenuProps[] = [
  { id: 'home', title: 'Homepage', href: '/', timeOrder: 1 },
  { id: 'about', title: 'About Me', href: '/about', timeOrder: 2 },
  { id: 'works', title: 'Works', href: '/works', timeOrder: 3 },
  { id: 'sertificate', title: 'Sertificate', href: '/sertificate', timeOrder: 4 },
];
