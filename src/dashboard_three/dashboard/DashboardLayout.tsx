import React from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { DashboardProvider } from './DashboardContext';
import { DashboardLayoutProps } from './types';
import styles from './DashboardLayout.module.css';
import { MobileMenuButton } from '../sidebar/MobileMenuButton.module.css';
import { ThemeToggle } from './ThemeToggle';
import { dashboardConfigs } from './dashboardConfigs';

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  adminType,
  children
}) => {
  const config = dashboardConfigs[adminType];

  return (
    <DashboardProvider initialAdminType={adminType}>
      <div className={styles.dashboardLayout}>
        <MobileMenuButton />
        <Sidebar 
          items={config.sidebarItems}
          logo="/assets/logo.svg"
          onSignOut={() => {}}
        />
        <main className={styles.mainContent}>
          <header className={styles.header}>
            <ThemeToggle />
          </header>
          <div className={styles.content}>
            {children}
          </div>
        </main>
      </div>
    </DashboardProvider>
  );
};