export type AdminType = 'masterSuperAdmin' | 'superAdmin' | 'secretary' | 'deliveryPerson' | 'customerService' | 'supervisor';

export interface DashboardConfig {
  type: AdminType;
  sidebarItems: SidebarItem[];
  allowedRoutes: string[];
  permissions: string[];
}

export interface SidebarItem {
  id: string;
  icon: string;
  label: string;
  path: string;
  children?: SidebarItem[];
}

export interface DashboardLayoutProps {
  adminType: AdminType;
  children: React.ReactNode;
}

export interface DashboardContextType {
  adminType: AdminType;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}