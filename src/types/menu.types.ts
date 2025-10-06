export interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface NavigationMenuProps {
  id: string;
  title: string;
  href: string;
  timeOrder: number;
}
