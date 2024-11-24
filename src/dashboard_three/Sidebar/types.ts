export interface NavItemProps {
    icon: string;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
  }
  
  export interface SidebarProps {
    items: NavItemProps[];
    logo: string;
    onSignOut: () => void;
  }