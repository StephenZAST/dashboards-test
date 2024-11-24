import React, { createContext, useState, useContext, useCallback } from 'react';
import { AdminType, DashboardContextType } from './types';

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider: React.FC<{
  children: React.ReactNode;
  initialAdminType: AdminType;
}> = ({ children, initialAdminType }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [adminType] = useState<AdminType>(initialAdminType);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      document.body.setAttribute('data-theme', newTheme);
      return newTheme;
    });
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        adminType,
        theme,
        toggleTheme,
        isSidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};